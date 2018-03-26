// HOC for fetching entries from contentful

import React from 'react';
import lodash from 'lodash';
import {createClient} from 'contentful';

export const withEntry = Page => {
	const WithEntry = props => <Page {...props}/>;

	WithEntry.getInitialProps = async ({query: {id}}) => {
		const client = createClient({
			space: '6hyijb95boju',
			accessToken: 'f214dba82579af555cd4839172570328cf8aee10e37bf5b83094953bb65fb317'
		});

		const response = await client.getEntry(id);

		const post = {
			sys: {
				id: response.sys.id
			},
			data: {
				title: response.fields.title,
				date: response.fields.date,
				body: response.fields.body,
				author: response.fields.author,
				category: response.fields.category
			}
		};

		if (response.fields.featuredImage) {
			post.data.image = await client.getAsset(response.fields.featuredImage.sys.id);
		}

		return {
			...(Page.getInitialProps ? await Page.getInitialProps() : {}),
			post
		};
	};

	return WithEntry;
};
