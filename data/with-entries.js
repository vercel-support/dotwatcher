// HOC for fetching entries from contentful

import React from 'react';
import {createClient} from 'contentful';
import lodash from 'lodash';
import slugify from 'slugify';
import vars from './api-vars';
import fetch from 'isomorphic-fetch';

export const WithEntries = Page => {
	const WithEntries = props => <Page {...props}/>;

	WithEntries.getInitialProps = async ({query: {id}}) => {
		const client = createClient({
			space: vars.space,
			accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
		});

		const racesQuery = {
			content_type: vars.contentTypes.categories, // eslint-disable-line camelcase
			order: 'fields.raceDate',
			include: 2
		};

		const racesResponse = await client.getEntries(racesQuery);
		const races = [];
		for (const item of racesResponse.items) {
			const entry = {
				sys: {
					id: item.sys.id
				},
				fields: item.fields
			};
			if (item.fields.icon) {
				entry.fields.icon = lodash.find(racesResponse.includes.Asset, obj => {
					return obj.sys.id === item.fields.icon.sys.id;
				});
			}
			races.push(entry);
		}

		const race = await lodash.find(races, obj => {
			return slugify(obj.fields.title, {lower: true}) === id || obj.sys.id === id;
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

		const discourseReplyCount = await fetch(`https://community.dotwatcher.cc/t/${race.fields.discourseId}.json`)
		.then(response => {
			if (response.status >= 400) {
				console.log('Bad response from server');
				return
			}
			return response.json();
		})
		.then(data => {
			return data.posts_count
		});

		return {
			...(Page.getInitialProps ? await Page.getInitialProps() : {}),
			posts,
			totalPosts,
			race: race,
			raceID: race.sys.id,
			raceName: race.fields.title,
			trackleadersID: race.fields.trackleadersRaceId,
			raceImage: race.fields.icon.fields.file.url,
			replies: discourseReplyCount
		};
	};

	return WithEntries;
};
