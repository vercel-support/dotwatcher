// HOC for fetching entries from contentful

import React from 'react';
import {createClient} from 'contentful';
import lodash from 'lodash';
import vars from './api-vars';

export const withCategories = Page => {
	const WithCategories = props => <Page {...props}/>;

	WithCategories.getInitialProps = async () => {
		const client = createClient({
			space: vars.space,
			accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
		});

		const racesQuery = {
			content_type: vars.contentTypes.categories, // eslint-disable-line camelcase
			order: 'fields.raceDate'
		};

		const homepageQuery = {
			'sys.id': vars.pages.homepage
		};

		const racesResponse = await client.getEntries(racesQuery);
		const homepageResponse = await client.getEntries(homepageQuery);

		const races = [];
		let page;

		for (const item of racesResponse.items) {
			const entry = {
				sys: {
					id: item.sys.id
				},
				data: {
					title: item.fields.title,
					description: item.fields.shortDescription,
					raceID: item.fields.trackleadersRaceId,
					raceDate: item.fields.raceDate,
					raceEndDate: item.fields.raceEndDate
				}
			};

			if (item.fields.icon) {
				entry.data.icon = lodash.find(racesResponse.includes.Asset, obj => {
					return obj.sys.id === item.fields.icon.sys.id;
				});
			}
			races.push(entry);
		}

		if (homepageResponse.items[0]) {
			page = {
				id: homepageResponse.items[0].sys.id,
				title: homepageResponse.items[0].fields.title,
				text: homepageResponse.items[0].fields.text,
				blocks: []
			};

			if (homepageResponse.items[0].fields.contentBlock) {
				for (const contentBlock of homepageResponse.items[0].fields.contentBlock) {
					const block = {
						sys: {
							id: contentBlock.sys.id
						},
						heading: contentBlock.fields.heading,
						layout: contentBlock.fields.layout,
						words: contentBlock.fields.words
					};

					if (contentBlock.fields.image) {
						block.image = lodash.find(homepageResponse.includes.Asset, obj => {
							return obj.sys.id === contentBlock.fields.image.sys.id;
						});
					}
					page.blocks.push(block);
				}
			}
		}

		return {
			...(Page.getInitialProps ? await Page.getInitialProps() : {}),
			races,
			page
		};
	};

	return WithCategories;
};
