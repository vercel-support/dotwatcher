import React from 'react';

import Head from 'next/head';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import shortcodes from 'remark-shortcodes';
import styled from 'styled-components';
import tachyons from 'styled-components-tachyons';
import Embed from '../components/embed';
import Header from '../components/header';
import Footer from '../components/footer';
import ContentBlock from '../components/content-block';
import Carousel from '../components/carousel';
import Page from '../components/shared/page';
import Wrapper from '../components/shared/wrapper';
import {withPage} from '../data/with-page';

const Div = styled.div`
	p {
		margin: 0;
	}
${tachyons}`;
const H1 = styled.h1`${tachyons}`;
const H2 = styled.h2`${tachyons}`;
const Img = styled.img`${tachyons}`;

class ContentPage extends React.Component {
	render() {
		const carouselSlides = this.props.page.blocks.filter(block => block.layout === 'Carousel slide');
		const carousel = carouselSlides.length ? <Carousel slides={carouselSlides}/> : null
		const blocksWithoutSlides = this.props.page.blocks.filter(block => block.layout !== 'Carousel slide');
		return (
			<Page>
				<Head>
					<title>{this.props.page.title} - dotwatcher.cc</title>
					<meta property="og:title" content={`${this.props.page.title} - dotwatcher.cc`}/>
					<meta property="og:description" content="DotWatcher is here to showcase the best of long distance self-supported bike racing." />
					<meta property="og:image" content="https://images.ctfassets.net/6hyijb95boju/KQ7Yj247Go6KOIm60SeQ2/9315aa310eee6a72088c9c37de8aa1e6/DotWatcher---Logo---Pin-_1_.jpg"/>
				</Head>
				<Header
					title="dotwatcher.cc"
				/>
			<Wrapper mt4 ph4>
					<Div bl bw3 b__light_blue mt5_l mb4 mb6_l pl4>
						<H1 f2 f1_ns lh_solid mt0 mb3>
							{this.props.page.title}
						</H1>
						<Div f3 measure lh_copy>
							<ReactMarkdown
								source={this.props.page.text}
								plugins={[shortcodes]}
								renderers={{shortcode: Embed}}
							/>
						</Div>
					</Div>
				</Wrapper>
				<Div fl w_100 mt3 mt4_l cf>
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

ContentPage.propTypes = {
	page: PropTypes.object.isRequired
};

export default withPage(ContentPage);
