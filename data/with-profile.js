import React from 'react';
import fetch from 'isomorphic-fetch';
import vars from './api-vars';

export const WithProfile = Page => {
	const WithProfile = props => <Page {...props}/>;

	WithProfile.getInitialProps = async ({query: { name }}) => {

		const profileResponse = await fetch(`${vars.data.baseUrl}.json?sql=select+*+from+results+where+Rider+like+"${encodeURIComponent(name)}"+order+by+Year+DESC&_shape=array`);
		const profile = await profileResponse.json();

		return {
			...(Page.getInitialProps ? await Page.getInitialProps() : {}),
			name,
			profile
		};
	};

	return WithProfile;
};
