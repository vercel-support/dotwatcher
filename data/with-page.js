// HOC for fetching entries from contentful

import React from 'react';
import {createClient} from 'contentful';
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
		const pageResponse = await client.getEntry(id);
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
				entry.data.icon = racesResponse.includes.Asset.find(obj => {
					return obj.sys.id === item.fields.icon.sys.id;
				});
			}
			races.push(entry);
		}

		if (pageResponse) {
			page = {
				id: pageResponse.sys.id,
				title: pageResponse.fields.title,
				text: pageResponse.fields.text,
				blocks: []
			};

			if (pageResponse.fields.bannerImage) {
				page.image = pageResponse.includes.Asset.find(obj => {
					return obj.sys.id === pageResponse.fields.bannerImage.sys.id;
				});
			}

			if (pageResponse.fields.contentBlock) {
				for (const contentBlock of pageResponse.fields.contentBlock) {
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
						block.race = races.find(obj => {
							return obj.sys.id === contentBlock.fields.race.sys.id;
						});
					}

					if (contentBlock.fields.image) {
						block.image = pageResponse.includes.Asset.find(obj => {
							return obj.sys.id === contentBlock.fields.image.sys.id;
						});
					}
					if (contentBlock.fields.logoOverlay) {
						block.logoOverlay = pageResponse.includes.Asset.find(obj => {
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
