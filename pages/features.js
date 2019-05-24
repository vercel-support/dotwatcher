import React, {Component} from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tachyons from 'styled-components-tachyons';

import Header from '../components/header';
import Page from '../components/shared/page';
import Footer from '../components/footer';
import FeaturePreview from '../components/feature-preview';
import {WithFeatures} from '../data/with-features';

const Heading = styled.header`${tachyons}`;
const H1 = styled.h1`${tachyons}`;
const Div = styled.div`${tachyons}`;

class App extends Component {
	render() {
		return (
			<Page>
				<Head>
					<title>Features - DotWatcher.cc</title>
					<meta property="og:title" content="Features - DotWatcher.cc"/>
					<meta property="og:description" content="DotWatcher is here to showcase the best of long distance self-supported bike racing."/>
					<meta property="og:image" content="https://images.ctfassets.net/6hyijb95boju/KQ7Yj247Go6KOIm60SeQ2/9315aa310eee6a72088c9c37de8aa1e6/DotWatcher---Logo---Pin-_1_.jpg"/>
				</Head>
				<Header
					title="dotwatcher.cc"
				/>
				<Div mt3 mt4_l mh6_l>
					<Div pb5>
						<Heading fl w_100 mb4 ph3>
							<H1 f4 fw6 ttu tracked bb bw1 b__light_gray pb1>Features</H1>
						</Heading>
						{
							this.props.features.map(feature => {
								return <FeaturePreview data={feature.data} />;
							})
						}
					</Div>
				</Div>
				<Footer/>
			</Page>
		);
	}
}

App.propTypes = {
	features: PropTypes.array
};

App.defaultProps = {
	features: []
};

export default WithFeatures(App);
