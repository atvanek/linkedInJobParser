import currencyRegex from './utils/currencyRegex';
import cleanString from './utils/cleanString';
import locationTypes from './utils/locationTypes';
import JobData from './utils/JobData';

addEventListener('load', () => {
	const jobTitle =
		document.querySelector('.job-details-jobs-unified-top-card__job-title')
			?.textContent || null;

	const jobDescriptors = document.querySelector(
		'.job-details-jobs-unified-top-card__primary-description > div'
	);

	console.log(jobDescriptors);

	const companyNode = jobDescriptors?.querySelector('a');
	const companyText = companyNode?.textContent;

	const jobLocation =
		companyNode?.nextSibling?.nextSibling?.textContent
			?.replace('·', '')
			.trim() || null;

	const jobInsights = Array.from(
		document.querySelectorAll(
			'.job-details-jobs-unified-top-card__job-insight > span > span'
		)
	);

	console.log(jobInsights);

	const compensation =
		jobInsights
			.find((node) => node.textContent?.match(currencyRegex))
			?.textContent?.trim() || null;

	const jobLocationTypes = jobInsights.filter(
		(node) =>
			node instanceof HTMLElement &&
			locationTypes.includes(cleanString(node.innerText))
	) as HTMLElement[];

	const jobLocationTypesCleaned = jobLocationTypes.map((el) =>
		cleanString(el.innerText)
	);

	console.log(jobLocationTypesCleaned);

	const jobData = new JobData(
		jobTitle,
		companyText,
		jobLocation,
		jobLocationTypesCleaned,
		compensation
	);

	console.log(jobData.toString());
});
