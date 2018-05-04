import React from 'react';

import Head from 'next/head';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown-with-shortcodes';
import shortcodes from 'remark-shortcodes';
import styled from 'styled-components';
import tachyons from 'styled-components-tachyons';
import Embed from '../components/embed';
import Header from '../components/header';
import Footer from '../components/footer';
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
		return (
			<Page sans_serif near_black pa0 ma0>
				<Head>
					<title>{this.props.page.title} - dotwatcher.cc</title>
					<meta property="og:title" content={`${this.props.page.title} - dotwatcher.cc`}/>
					<meta property="og:image" content=""/>
				</Head>
				<Header
					title="dotwatcher.cc"
				/>
				<Wrapper mt4 mt5_l ph4>
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
					{
						this.props.page.blocks.map(block => {
							const float = block.layout === 'Image right' ? 'right' : 'left';
							const ImageWrap = styled.div`
								float: ${block.layout === 'Image right' ? 'right' : 'left'};
								@media screen and (min-width: 30em) and (max-width: 60em) {
									padding: ${block.layout === 'Image right' ? '0 0 0 var(--spacing-medium)' : '0 var(--spacing-medium) 0 0'};
								}
								@media screen and (min-width: 60em) {
									padding: ${block.layout === 'Image right' ? '0 0 0 var(--spacing-large)' : '0 var(--spacing-large) 0 0'};
								}
							${tachyons}`;
							const WordsWrap = styled.div`
								@media screen and (min-width: 30em) and (max-width: 60em) {
									padding: ${block.layout === 'Image right' ? '0 var(--spacing-medium) 0 0' : '0 0 0 var(--spacing-medium)'};
								}
								@media screen and (min-width: 60em) {
									padding: ${block.layout === 'Image right' ? '0 var(--spacing-large) 0 0' : '0 0 0 var(--spacing-large)'};
								}
							${tachyons}`;
							return (
								<Wrapper fl w_100 mb4 mb5_ns bb bw1 pb4_ns b__light_gray className="with-divider cf">
									<ImageWrap w_100 w_40_ns w_50_l pb4>
										{ block.image ? <Img mw_100 src={block.image.fields.file.url} alt={block.image.fields.description}/> : <Placeholder w_100 h_100 pv6 bg_light_gray/> }
									</ImageWrap>
									<WordsWrap fl w_100 w_60_m w_50_l>
										<H2 f2 ma0>{block.heading}</H2>
										<Wrapper measure lh_copy f4>
											<ReactMarkdown
												source={block.words}
												plugins={[shortcodes]}
												renderers={{shortcode: Embed}}
											/>
										</Wrapper>
									</WordsWrap>
								</Wrapper>
							)}
						)
					}
				</Wrapper>
				<Footer/>
			</Page>
		);
	}
}

ContentPage.propTypes = {
	page: PropTypes.object.isRequired
};

export default withPage(ContentPage);
