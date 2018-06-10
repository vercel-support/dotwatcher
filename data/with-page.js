// HOC for fetching entries from contentful

import React from 'react';
import {createClient} from 'contentful';
import lodash from 'lodash';
import vars from './api-vars';

export const withPage = Page => {
	const withPage = props => <Page {...props}/>;

	withPage.getInitialProps = async ({query: {id}}) => {
		const client = createClient({
			space: vars.space,
			accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
		});

		const racesQuery = {
			content_type: vars.contentTypes.categories, // eslint-disable-line camelcase
			order: 'fields.raceDate'
		};

		const racesResponse = await client.getEntries(racesQuery);
		const pageResponse = await client.getEntries({'sys.id': id});
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

		if (pageResponse.items[0]) {
			page = {
				id: pageResponse.items[0].sys.id,
				title: pageResponse.items[0].fields.title,
				text: pageResponse.items[0].fields.text,
				blocks: []
			};

			if (pageResponse.items[0].fields.contentBlock) {
				for (const contentBlock of pageResponse.items[0].fields.contentBlock) {
					const block = {
						sys: {
							id: contentBlock.sys.id
						},
						heading: contentBlock.fields.heading,
						layout: contentBlock.fields.layout,
						words: contentBlock.fields.words,
						link: contentBlock.fields.link,
						callToAction: contentBlock.fields.callToActionText
					};

					if (contentBlock.fields.race) {
						block.race = lodash.find(races, obj => {
							return obj.sys.id === contentBlock.fields.race.sys.id;
						});
					}

					if (contentBlock.fields.image) {
						block.image = lodash.find(pageResponse.includes.Asset, obj => {
							return obj.sys.id === contentBlock.fields.image.sys.id;
						});
					}
					if (contentBlock.fields.logoOverlay) {
						block.logoOverlay = lodash.find(pageResponse.includes.Asset, obj => {
							return obj.sys.id === contentBlock.fields.logoOverlay.sys.id;
						});
					}
					page.blocks.push(block);
				}
			}
		}

		return {
			...(Page.getInitialProps ? await Page.getInitialProps() : {}),
			page
		};
	};

	return withPage;
};
