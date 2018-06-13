// HOC for fetching entries from contentful

import React from 'react';
import {createClient} from 'contentful';
import lodash from 'lodash';
import slugify from 'slugify';
import vars from './api-vars';

export const WithEntries = Page => {
	const WithEntries = props => <Page {...props}/>;

	WithEntries.getInitialProps = async ({query: {id}}) => {
		const client = createClient({
			space: vars.space,
			accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
		});

		const racesQuery = {
			content_type: vars.contentTypes.categories, // eslint-disable-line camelcase
			order: 'fields.raceDate'
		};

		const racesResponse = await client.getEntries(racesQuery);
		const races = [];
		for (const item of racesResponse.items) {
			const entry = {
				sys: {
					id: item.sys.id
				},
				data: {
					title: item.fields.title
				}
			};
			races.push(entry);
		}

		const race = await lodash.find(races, obj => {
			return slugify(obj.data.title, {lower: true}) === id || obj.sys.id === id;
		});

		const contenfulQuery = {
			content_type: vars.contentTypes.posts, // eslint-disable-line camelcase
			'fields.category.sys.id': race.sys.id,
			order: '-sys.createdAt'
		};

		const response = await client.getEntries(contenfulQuery);

		const totalPosts = response.total;
		const posts = [];

		for (const item of response.items) {
			const entry = {
				sys: {
					id: item.sys.id
				},
				data: {
					title: item.fields.title,
					format: item.fields.format,
					slug: item.fields.slug,
					date: item.sys.createdAt,
					body: item.fields.body,
					categories: item.fields.category,
					keyEvent: item.fields.keyPost,
					embed: item.fields.embed
				}
			};

			if (item.fields.featuredImage) {
				entry.data.image = lodash.find(response.includes.Asset, obj => {
					return obj.sys.id === item.fields.featuredImage.sys.id;
				});
			}
			posts.push(entry);
		}

		return {
			...(Page.getInitialProps ? await Page.getInitialProps() : {}),
			posts,
			totalPosts,
			trackleadersID: posts[0].data.categories[0].fields.trackleadersRaceId,
			raceName: posts[0].data.categories[0].fields.title,
			raceID: posts[0].data.categories[0].sys.id,
			race: posts[0].data.categories[0],
			raceImage: posts[0].data.categories[0].fields.icon.fields.file.url
		};
	};

	return WithEntries;
};
