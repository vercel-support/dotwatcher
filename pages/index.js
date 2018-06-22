import React, {Component} from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tachyons from 'styled-components-tachyons';

import Header from '../components/header';
import ContentBlock from '../components/content-block';
import Page from '../components/shared/page';
import Footer from '../components/footer';
import Carousel from '../components/carousel';
import {withHomepage} from '../data/with-homepage';

const Div = styled.div`${tachyons}`;

class App extends Component {
	render() {
		const carouselSlides = this.props.page.blocks.filter(block => block.layout === 'Carousel slide');
		const carousel = carouselSlides.length ? <Carousel slides={carouselSlides}/> : null;
		const blocksWithoutSlides = this.props.page.blocks.filter(block => block.layout !== 'Carousel slide');
		return (
			<Page>
				<Head>
					<title>Long distance bike race coverage – DotWatcher.cc</title>
					<meta property="og:title" content="DotWatcher.cc"/>
					<meta property="og:description" content="DotWatcher is here to showcase the best of long distance self-supported bike racing."/>
					<meta property="og:image" content="https://images.ctfassets.net/6hyijb95boju/KQ7Yj247Go6KOIm60SeQ2/9315aa310eee6a72088c9c37de8aa1e6/DotWatcher---Logo---Pin-_1_.jpg"/>
				</Head>
				<Header
					title="dotwatcher.cc — Long distance self-supported bike race coverage"
				/>
				<Div mt3 mt4_l>
					{carousel}
					{
						blocksWithoutSlides.map(block => {
							return (
								<ContentBlock
									key={block.sys.id}
									block={block}
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
	page: PropTypes.object
};

App.defaultProps = {
	page: {}
};

export default withHomepage(App);
