import ReactGA from 'react-ga';

// Hat tip: https://malloc.fi/using-google-analytics-with-next-js

export const initGA = () => {
	// console.log('GA init');
	ReactGA.initialize(process.env.ANALYTICS);
};

export const logPageView = () => {
	// console.log(`Logging pageview for ${window.location.pathname}`);
	ReactGA.set({page: window.location.pathname});
	ReactGA.pageview(window.location.pathname);
};

export const logEvent = (category = '', action = '') => {
	if (category && action) {
		ReactGA.event({category, action});
	}
};

export const logException = (description = '', fatal = false) => {
	if (description) {
		ReactGA.exception({description, fatal});
	}
};
