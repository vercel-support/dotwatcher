import React from 'react';

import Head from 'next/head';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tachyons from 'styled-components-tachyons';
import Header from '../components/header';
import {Link} from '../routes';
import slugify from '../utils/slugify';
import Page from '../components/shared/page';
import Post from '../components/post';
import {withEntries} from '../data/with-entries';
import MapContainer from '../components/map-container';

const PostWrapper = styled.div`
@media screen and (min-width: 64em) {
	margin-left: 40%;
}
${tachyons}`;
const A = styled.a`${tachyons}`;

class PostPage extends React.Component {
	render() {
		return (
			<Page>
				<Head>
					<title>{this.props.posts[0].data.title}</title>
					<meta property="og:title" content={this.props.posts[0].data.title} />
					<meta property="og:description" content="DotWatcher is here to showcase the best of long distance self-supported bike racing." />
					<meta property="og:image" content="https://images.ctfassets.net/6hyijb95boju/KQ7Yj247Go6KOIm60SeQ2/9315aa310eee6a72088c9c37de8aa1e6/DotWatcher---Logo---Pin-_1_.jpg" />
				</Head>
				<Header
					title="dotwatcher.cc"
					raceName={this.props.posts[0].data.categories[0].fields.title}
					race={this.props.posts[0].data.categories[0]}
				/>
				<MapContainer raceID={this.props.posts[0].data.categories[0].fields.trackleadersRaceId} offset="true" />
				<PostWrapper fl w_100 w_50_l pa4>
					<Link route="race" params={{ type: 'race', id: this.props.posts[0].data.categories[0].sys.id}} passHref prefetch>
						<A near_black f6 href="#">« Back to {this.props.posts[0].data.categories[0].fields.title} feed</A>
					</Link>
					<Post key={this.props.posts[0].sys.id} id={this.props.posts[0].sys.id} data={this.props.posts[0].data}/>
				</PostWrapper>
			</Page>
		);
	}
}

PostPage.propTypes = {
	posts: PropTypes.array.isRequired
};

export default withEntries(PostPage);
