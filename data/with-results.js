// HOC for fetching results from data.dotwatcher.cc (datasette)

import React from 'react';
import fetch from 'isomorphic-fetch';
import vars from './api-vars';

export const WithResults = Page => {
	const WithResults = props => <Page {...props} />

	WithResults.getInitialProps = async ({ query: { year, race, focus, activeClass } }) => {

		if (year && race) {
			const raceResultsResponse = await fetch(`${vars.data.baseUrl}/results.json?Event=${race}&Year=${year}&_size=max&_shape=array`);
			const results = await raceResultsResponse.json();

			const racerClasses = []

			results.forEach(result => {
				if (racerClasses.filter(racerClass => racerClass === result['Class']).length < 1) {
					racerClasses.push(result['Class'])
				}
			})

			activeClass = activeClass || racerClasses[0]

			return {
				...(Page.getInitialProps ? await Page.getInitialProps() : {}),
				race,
				year,
				results,
				focus,
				racerClasses,
				activeClass
			};
		} else {
			const allResultsResponse = await fetch(`${vars.data.baseUrl}.json?sql=select+DISTINCT+Event%2C+year+from+results+order+by+Event+ASC%2C+year+Desc&_shape=array`);
			const rawResults = await allResultsResponse.json();
			const raceResultsByYear = [];

			rawResults.forEach(row => {
				if (row.Event !== null) {
					if (raceResultsByYear.filter(result => (result.Event === row.Event)).length > 0) {
						raceResultsByYear.filter(result => (result.Event === row.Event))[0]['Year'].push(row['Year'])
					} else {
						row['Year'] = [row['Year']]
						raceResultsByYear.push(row)
					}
				}
			});

			return {
				...(Page.getInitialProps ? await Page.getInitialProps() : {}),
				race,
				year,
				raceResultsByYear
			};
		}
	};

	return WithResults;
};
