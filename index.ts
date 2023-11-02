import queryJobData from './utils/queryJobData';
import withRetry from './utils/withRetry';

addEventListener('load', () => {
	let currentJobId = new URLSearchParams(window.location.search).get(
		'currentJobId'
	);

	const jobDetailsContainer = document.querySelector(
		'.jobs-search__job-details--container'
	);

	const observer = new MutationObserver(function (mutations) {
		handleMutation(
			new URLSearchParams(window.location.search).get('currentJobId')
		);
	});

	const config = {
		childList: true,
		subtree: true,
	};

	observer.observe(jobDetailsContainer, config);

	function handleMutation(newJobId: string) {
		if (currentJobId !== newJobId) {
			currentJobId = newJobId;
			withRetry(queryJobData);
		}
	}

	withRetry(queryJobData);
});
