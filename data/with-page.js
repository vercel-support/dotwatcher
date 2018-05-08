import React from 'react';
import {createClient} from 'contentful';
import lodash from 'lodash';
import vars from './api-vars';

export const withPage = Page => {
	const withPage = props => <Page {...props}/>;

	withPage.getInitialProps = async ({query: {id}}) => {
		let page;

		const client = createClient({
			space: vars.space,
			accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
		});

		const response = await client.getEntries({'sys.id': id});

		if (response.items[0]) {
			page = {
				id: response.items[0].sys.id,
				title: response.items[0].fields.title,
				text: response.items[0].fields.text,
				blocks: []
			};

			if (response.items[0].fields.contentBlock) {
				for (const contentBlock of response.items[0].fields.contentBlock) {
					const block = {
						sys: {
							id: contentBlock.sys.id
						},
						heading: contentBlock.fields.heading,
						layout: contentBlock.fields.layout,
						words: contentBlock.fields.words
					};

					if (contentBlock.fields.image) {
						block.image = lodash.find(response.includes.Asset, obj => {
							return obj.sys.id === contentBlock.fields.image.sys.id;
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
