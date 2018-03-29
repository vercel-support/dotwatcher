import React from 'react';

import Head from 'next/head';
import PropTypes from 'prop-types';
import Header from '../components/header';
import Page from '../components/shared/page';
import Post from '../components/post';
import Wrapper from '../components/shared/wrapper';
import {withEntries} from '../data/with-entries';

class Race extends React.Component {
	render () {
		return (
			<Page sans_serif near_black pa0 ma0>
				<Head>
					<title>Race name</title>
					<meta property="og:title" content="Race name" />
					<meta property="og:image" content="" />
				</Head>
				<Header
					title="dotwatcher.cc"
				/>
				<Wrapper>
					{
						this.props.posts.map(item => (
							<Post key={item.sys.id} id={item.sys.id} data={item.data}/>
						))
					}
				</Wrapper>
			</Page>
		);
	}
}

Race.propTypes = {
	post: PropTypes.object.isRequired
};

export default withEntries(Race);
