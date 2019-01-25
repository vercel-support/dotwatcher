import React from 'react';
import fetch from 'isomorphic-fetch';

export const WithProfile = Page => {
	const WithProfile = props => <Page {...props}/>;
	const baseURL = 'https://data.dotwatcher.cc/data-d6ac28d';

	WithProfile.getInitialProps = async ({query: { name }}) => {

		const profileResponse = await fetch(`${baseURL}.json?sql=select+*+from+results+where+%22Rider%22+like+%22${name}%22+order+by+Year+DESC&_shape=array`);
		const profile = await profileResponse.json();

		return {
			...(Page.getInitialProps ? await Page.getInitialProps() : {}),
			name,
			profile
		};
	};

	return WithProfile;
};
