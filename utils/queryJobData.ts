import cleanString from './cleanString';
import { locationTypes, employmentTypes, currencyRegex } from './constants';
import JobData from '../classes/JobData';

export default function queryJobData() {
	const queriedJobTitle = document.querySelector(
		'.job-details-jobs-unified-top-card__job-title'
	)?.textContent;

	const queriedJobTitleTrimmed = queriedJobTitle
		? queriedJobTitle.trim()
		: queriedJobTitle;

	const jobDescriptorsNode = document.querySelector(
		'.job-details-jobs-unified-top-card__primary-description > div'
	);

	const companyNode = jobDescriptorsNode?.querySelector('a');
	const queriedCompany = jobDescriptorsNode?.querySelector('a')?.textContent;

	const queriedLocation = companyNode?.nextSibling?.nextSibling?.textContent
		?.replace('·', '')
		.trim();

	const jobInsights = Array.from(
		document.querySelectorAll('.job-details-jobs-unified-top-card__job-insight')
	);

	function findDeep(array: Element[]) {
		const queriedLocationTypes = [];
		let queriedCompensation = null;
		const queriedEmploymentTypes = [];
		function traverseAndFill(array: Element[] | NodeListOf<ChildNode>) {
			array.forEach((element: Element | ChildNode) => {
				if (element.childNodes.length) {
					traverseAndFill(element.childNodes);
				} else {
					const cleanedTextContent = element.textContent
						? cleanString(element.textContent)
						: '';
					if (cleanedTextContent.length) {
						if (locationTypes.has(cleanedTextContent)) {
							queriedLocationTypes.push(cleanedTextContent);
						} else if (cleanedTextContent.match(currencyRegex)) {
							queriedCompensation = cleanedTextContent;
						} else if (employmentTypes.has(cleanedTextContent)) {
							queriedEmploymentTypes.push(cleanedTextContent);
						}
					}
				}
			});
		}
		traverseAndFill(array);
		return {
			queriedLocationTypes,
			queriedCompensation,
			queriedEmploymentTypes,
		};
	}

	const { queriedLocationTypes, queriedCompensation, queriedEmploymentTypes } =
		findDeep(jobInsights);

	const id = new URLSearchParams(window.location.search).get('currentJobId');

	return new JobData(
		queriedJobTitleTrimmed,
		queriedCompany,
		queriedLocation,
		queriedLocationTypes,
		queriedEmploymentTypes,
		queriedCompensation,
		id
	);
}
