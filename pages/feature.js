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
import {withFeature} from '../data/with-feature';
import widont from '../utils/widont';

const Div = styled.div`
	p {
		margin: 0;
	}
${tachyons}`;
const Heading = styled.header`${tachyons}`;
const H1 = styled.h1`${tachyons}`;

class FeaturePage extends React.Component {
	render() {
		const StyledWrapper = styled.div`
			background-image: ${this.props.feature.image ? `url(${this.props.feature.image.fields.file.url})` : 'none' };
			background-repeat: no-repeat;
			background-size: cover;
			background-position: center center;
			height: ${this.props.feature.image ? `75vh` : `20vh`};

			&> h1 {
				background-color: rgba(255, 255, 255, .66)
			}
		${tachyons}`

		const carouselSlides = this.props.feature.blocks.filter(block => block.layout === 'Carousel slide');
		const carousel = carouselSlides.length ? <Carousel slides={carouselSlides}/> : null;
		const blocksWithoutSlides = this.props.feature.blocks.filter(block => block.layout !== 'Carousel slide');
		return (
			<Page>
				<Head>
					<title>{this.props.feature.title} – DotWatcher.cc</title>
					<meta property="og:title" content={`${this.props.feature.title} – DotWatcher.cc`}/>
					<meta property="og:description" content={this.props.feature.excerpt ? this.props.feature.excerpt : 'DotWatcher is here to showcase the best of long distance self-supported bike racing.' }/>
					<meta property="og:image" content={this.props.feature.image ? `${this.props.feature.image.fields.file.url}` : 'https://images.ctfassets.net/6hyijb95boju/KQ7Yj247Go6KOIm60SeQ2/9315aa310eee6a72088c9c37de8aa1e6/DotWatcher---Logo---Pin-_1_.jpg' }/>
					<meta name="twitter:card" content="summary_large_image" />
					<meta name="twitter:site" content="@dotwatcher"/>
					<meta name="twitter:creator" content="@dotwatcher"/>
					<meta name="twitter:title" content={`${this.props.feature.title} – DotWatcher.cc`} />
					<meta name="twitter:description" content="DotWatcher is here to showcase the best of long distance self-supported bike racing." />
					<meta name="twitter:image" content={this.props.feature.image ? `${this.props.feature.image.fields.file.url}` : 'https://images.ctfassets.net/6hyijb95boju/KQ7Yj247Go6KOIm60SeQ2/9315aa310eee6a72088c9c37de8aa1e6/DotWatcher---Logo---Pin-_1_.jpg' } />
					<meta name="description" content={this.props.feature.excerpt ? this.props.feature.excerpt : 'DotWatcher is here to showcase the best of long distance self-supported bike racing.' } />
					<script src="//www.instagram.com/embed.js" />
					</Head>
				<Header
					title="dotwatcher.cc"
				/>
				<StyledWrapper fl w_100 />
				<Heading mh3>
					<H1 f2 f_headline_ns fw6 lh_solid mv0 mh3 mh6_ns>
						{ widont(this.props.feature.title) }
					</H1>
				</Heading>
				<Div fl w_100 mt3 mt4_l cf>
					{carousel}
					{
						blocksWithoutSlides.map(block => {
							return (
								<ContentBlock
									key={block.sys.id}
									block={block}
									feature={true}
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

FeaturePage.propTypes = {
	feature: PropTypes.object.isRequired
};

export default withFeature(FeaturePage);
