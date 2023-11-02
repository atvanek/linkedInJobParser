import queryJobData from './utils/queryJobData';
import withRetry from './utils/withRetry';

console.log('script running');

let currentJobId = null;

function handleNavigate() {
	const newJobId = new URLSearchParams(window.location.search).get(
		'currentJobId'
	);
	if (!newJobId) return;

	if (currentJobId !== newJobId) {
		currentJobId = newJobId;
		withRetry(queryJobData);
	}
}

addEventListener('load', () => {
	handleNavigate();
});

addEventListener('click', () => {
	handleNavigate();
});
