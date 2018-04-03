import React from 'react';

import Head from 'next/head';
import PropTypes from 'prop-types';
import Header from '../components/header';
import Page from '../components/shared/page';
import Post from '../components/post';
import Wrapper from '../components/shared/wrapper';
import {withEntry} from '../data/with-entry';

class PostPage extends React.Component {
	render () {
		return (
			<Page sans_serif near_black pa0 ma0>
				<Head>
					<title>{this.props.post.data.title}</title>
					<meta property="og:title" content={this.props.post.data.title} />
					<meta property="og:image" content="" />
				</Head>
				<Header
					title="dotwatcher.cc"
				/>
				<Wrapper>
					<Post key={this.props.post.sys.id} id={this.props.post.sys.id} data={this.props.post.data}/>
				</Wrapper>
			</Page>
		);
	}
}

PostPage.propTypes = {
	post: PropTypes.object.isRequired
};

export default withEntry(PostPage);
