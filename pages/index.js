import React, {Component} from 'react';
import Head from 'next/head';
import moment from 'moment';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tachyons from 'styled-components-tachyons';

import Header from '../components/header';
import ContentBlock from '../components/content-block';
import Page from '../components/shared/page';
import RacePreview from '../components/race-preview';
import Footer from '../components/footer';
import {withHomepage} from '../data/with-homepage';

const Heading = styled.header`${tachyons}`;
const H1 = styled.h1`${tachyons}`;
const Div = styled.div`${tachyons}`;
const RaceWrap = styled.div`
	@media screen and (min-width: 64em) {
		margin-left: 10%;
	}
${tachyons}`;

class App extends Component {
	render() {
		return (
			<Page>
				<Head>
					<title>DotWatcher.cc</title>
					<meta property="og:title" content="DotWatcher.cc" />
					<meta property="og:description" content="DotWatcher is here to showcase the best of long distance self-supported bike racing." />
					<meta property="og:image" content="https://images.ctfassets.net/6hyijb95boju/KQ7Yj247Go6KOIm60SeQ2/9315aa310eee6a72088c9c37de8aa1e6/DotWatcher---Logo---Pin-_1_.jpg" />
				</Head>
				<Header
					title="dotwatcher.cc"
				/>
				<Div mt3 mt4_l>
					{
						this.props.page.blocks.map(block => {
							return (
								<ContentBlock
									key={block.sys.id}
									block={block}
									race={this.props.races.filter(race => {
										return race.sys.id === block.race ? race : null;
									})}
								/>
							);
						})
					}
				</Div>
				<Footer/>
			</Page>
		);
	}
}

App.propTypes = {
	races: PropTypes.array,
	page: PropTypes.object
};

App.defaultProps = {
	races: [],
	page: {}
};

export default withHomepage(App);
