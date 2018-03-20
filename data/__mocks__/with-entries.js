import React from 'react';

export const withEntries = Page => {
	const WithEntries = props => <Page />;

	WithEntries.getInitialProps = () => {
		const posts = [
            {
				sys: {
					id: 1
				},
				data: {
					title: 'Post Title #1',
					slug: 'post-title-1',
					date: '2018-03-20T13:46:51.000Z',
					body: 'Post body.'
				}
			},
            {
				sys: {
					id: 2
				},
				data: {
					title: 'Post Title #2',
					slug: 'post-title-1',
					date: '2018-02-20T13:46:51.000Z',
					body: 'Post body.'
				}
			},
            {
				sys: {
					id: 3
				},
				data: {
					title: 'Post Title #3',
					slug: 'post-title-1',
					date: '2018-01-20T13:46:51.000Z',
					body: 'Post body.'
				}
			}
		];

		return {
			posts
		};
	};

	return WithEntries;
};
