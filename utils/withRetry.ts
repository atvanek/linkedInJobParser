import JobData from '../classes/JobData';

export default function withRetry(query: () => JobData) {
	let count = 0;
	const queriedData = query();
	if (
		(!queriedData.company || !queriedData.jobLocationTypes.length) &&
		count < 5
	) {
		count++;
		setTimeout(() => withRetry(query), 500);
	} else {
		console.log(queriedData.toString());
		return queriedData;
	}
}
