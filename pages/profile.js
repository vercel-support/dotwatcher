import Head from 'next/head';
import Header from '../components/header';
import { Link, Router } from '../routes'
import Page from '../components/shared/page';
import PropTypes from 'prop-types';
import React from 'react';
import Wrapper from '../components/shared/wrapper';
import slugify from '../utils/slugify';
import styled from 'styled-components';
import tachyons from 'styled-components-tachyons';
import {withProfile} from '../data/with-profile';

const Img = styled.img`${tachyons}`;
const A = styled.a`${tachyons}`;
const Div = styled.div`${tachyons}`;
const Span = styled.span`${tachyons}`;
const H1 = styled.h1`${tachyons}`;

class Profile extends React.Component {
	render () {
		return (
			<Page>
				<Head>
					<title></title>
					<meta property="og:title" content="" />
					<meta property="og:image" content="" />
				</Head>
				<Header
					title="dotwatcher.cc"
				/>
				{!this.props.profile &&
					<Wrapper w_100 w_20_ns mt4>
						User not found
					</Wrapper>
				}
				{this.props.profile &&
					<Div mt5>
						{this.props.profile.data.profilePhoto &&
							<Wrapper w_100 w_20_ns pa4>
								<Img img db src={this.props.profile.data.profilePhoto.fields.file.url}/>
							</Wrapper>
						}
						<Wrapper w_100 w_40_ns mt4>
							<H1 lh_title ma0 f2 mb4>{this.props.profile.data.name}</H1>
							<Div lh_copy measure>
								{this.props.profile.data.biography}
							</Div>
							<Div lh_copy mv4>
							{this.props.profile.data.twitterUsername &&
								<A link near_black underline mr3 href={`http://twitter.com/${this.props.profile.data.twitterUsername}`}>
									Twitter
								</A>
							}
							{this.props.profile.data.instagramUsername &&
								<A link near_black underline mr3 href={`http://instagram.com/${this.props.profile.data.instagramUsername}`}>
									Instagram
								</A>
							}
							</Div>
							<Div lh_copy>
							<Span mr2>Races done:</Span>
							{
								this.props.profile.data.categories.map(category => (
									<Link key={category.sys.id} route="race" params={{type: 'race', id: category.sys.id, slug: slugify(category.fields.title)}} passHref prefetch>
										<A link dim near_black underline>{category.fields.title}</A>
									</Link>
								))
							}
							</Div>
						</Wrapper>
					</Div>
				}
			</Page>
		);
	}
}

Profile.propTypes = {
	profile: PropTypes.object.isRequired
};

export default withProfile(Profile);
