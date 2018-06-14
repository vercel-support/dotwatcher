'use strict';

const quotes = string => {
	return string.replace(/'\b/g, '\u2018')
		.replace(/\b'/g, '\u2019')
		.replace(/"\b/g, '\u201c')
		.replace(/\b"/g, '\u201d')
		.replace(/\b\u2018\b/g, '\u2019');
};

export default quotes;
