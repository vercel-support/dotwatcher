import React from 'react';

import Head from 'next/head';
import styled from 'styled-components';
import tachyons from 'styled-components-tachyons';

import PropTypes from 'prop-types';
import Header from '../components/header';
import KeyEvents from '../components/key-events';
import TopRiders from '../components/top-riders';
import MapContainer from '../components/map-container';
import Page from '../components/shared/page';
import Post from '../components/post';
import Wrapper from '../components/shared/wrapper';
import {withEntries} from '../data/with-entries';

const KeyEventsWrapper = styled.div`
@media (min-width: 64em) {
	margin-left: 40%;
}
${tachyons}`;

class Race extends React.Component {
	render() {
		return (
			<Page sans_serif near_black pa0 ma0>
				<Head>
					<title>{this.props.posts[0].data.categories[0].fields.title} – dotwatcher.cc</title>
					<meta property="og:title" content={`${this.props.posts[0].data.categories[0].fields.title} – dotwatcher.cc`}/>
					<meta property="og:image" content=""/>
				</Head>
				<Header
					title="dotwatcher.cc"
					raceName={this.props.posts[0].data.categories[0].fields.title}
				/>
				<MapContainer raceID={this.props.posts[0].data.categories[0].fields.trackleadersRaceId}/>
				<KeyEventsWrapper fl ph3 pb2 w_100 w_30_m w_20_l mt4_l>
					<TopRiders raceID={this.props.posts[0].data.categories[0].sys.id}/>
					<KeyEvents posts={this.props.posts}/>
				</KeyEventsWrapper>
				<Wrapper ph3 pb2 w_100 w_70_m w_40_l mt5_l>
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
	posts: PropTypes.array
};

Race.defaultProps = {
	posts: []
};

export default withEntries(Race);
