import React from 'react';

import Head from 'next/head';
import find from 'lodash/find';
import {withRouter} from 'next/router'
import {createClient} from 'contentful';
import Pusher from 'pusher-js';
import styled from 'styled-components';
import tachyons from 'styled-components-tachyons';

import Header from '../components/header';
import KeyEvents from '../components/key-events';
import TopRiders from '../components/top-riders';
import MapContainer from '../components/map-container';
import Button from '../components/shared/button';
import Page from '../components/shared/page';
import Post from '../components/post';
import Wrapper from '../components/shared/wrapper';
import vars from '../data/api-vars';

const H1 = styled.h1`${tachyons}`;
const PostsWrapper = styled.div`
@media screen and (min-width: 60em) {
	margin-top: 4.6875rem
}
${tachyons}`;
const KeyEventsWrapper = styled.div`
@media screen and (min-width: 60em) {
	margin-left: 40%;
}
${tachyons}`;
const Notification = styled(Button)`
	top: 0;
	left: 50%;
	transform: translate(-50%, 0);
	@media screen and (min-width: 48em) {
		top: inherit;
	}
	@media screen and (min-width: 60em) {
		left: 80%;
	}
`;

// Pusher.logToConsole = true;
const pusher = new Pusher(process.env.PUSHER_KEY, {
	cluster: 'eu',
	encrypted: true
})
const channel = pusher.subscribe('dotwatcher')

class Race extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			posts: [],
			skip: 0,
			totalPosts: 0,
			loading: true,
			newPost: false,
			newPostIDs: []
		};
	}

	async fetchPosts(id) {
		this.setState({loading: true})
		const client = createClient({
			space: vars.space,
			accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
		});

		const getPageOfPosts = {
			content_type: vars.contentTypes.posts, // eslint-disable-line camelcase
			'fields.category.sys.id': this.props.router.query.id,
			order: '-sys.createdAt',
			limit: 5,
			skip: this.state.skip
		};
		let response
		if (id) {
			response = await client.getEntries({'sys.id': id});
		} else {
			response = await client.getEntries(getPageOfPosts);
		}
		const newPosts = [];
		for (const item of response.items) {
			const entry = {
				sys: {
					id: item.sys.id
				},
				data: {
					title: item.fields.title,
					format: item.fields.format,
					slug: item.fields.slug,
					date: item.sys.createdAt,
					body: item.fields.body,
					categories: item.fields.category,
					keyEvent: item.fields.keyPost,
					embed: item.fields.embed
				}
			};

			if (item.fields.featuredImage) {
				entry.data.image = find(response.includes.Asset, obj => {
					return obj.sys.id === item.fields.featuredImage.sys.id;
				});
			}
			newPosts.push(entry);
		}
		if (id) {
			await this.setState({
				posts: [ ...newPosts, ...this.state.posts],
				loading: false
			});
		} else {
			await this.setState({
				posts: [...this.state.posts, ...newPosts],
				totalPosts: response.total,
				loading: false
			});
		}
	}

	componentDidMount() {
		this.fetchPosts()
		channel.bind('new-post', newPostEvent => {
			if (newPostEvent.category === this.state.posts[0].data.categories[0].sys.id) {
				this.setState({
					newPost: true,
					newPostIDs: [newPostEvent.post, ...this.state.newPostIDs]
				})
			}
		})
	}

	loadNextPageOfPosts() {
		this.setState(
			prevState => ({...prevState, skip: this.state.skip + 5}),
			() => (this.fetchPosts())
		);
	}

	loadPost() {
		this.state.newPostIDs.forEach(postID => {
			this.fetchPosts(postID)
		})
		this.setState({
			newPost: false,
			newPostIDs: []
		});
	}

	render() {
		let raceName;
		let raceID;
		let trackleadersID;
		if (this.state.posts.length) {
			raceName = this.state.posts[0].data.categories[0].fields.title
			raceID = this.state.posts[0].data.categories[0].sys.id
			trackleadersID = this.state.posts[0].data.categories[0].fields.trackleadersRaceId
		}

		const morePostsButton = (
			<Button db w5 loading={this.state.loading} onClick={this.loadNextPageOfPosts.bind(this)}>
				{
					this.state.loading ? 'Loading...' : 'Load more posts'
				}
			</Button>
		)

		let morePosts = null
		if (this.state.totalPosts > this.state.posts.length) {
			morePosts = morePostsButton
		} else if (this.state.posts.length === 0) {
			morePosts = null
		} else {
			morePosts = <H1 mt3 tc moon_gray tracked ttu i>Fin</H1>
		}

		let newPostsNotification = null
		const updateMessageQualifier = this.state.newPostIDs.length > 1 ? 'updates' : 'update'
		if (this.state.newPost) {
			newPostsNotification = <Notification fixed z_1 loading={this.state.loading} onClick={this.loadPost.bind(this)} href="#posts">
				{
					this.state.loading ? `Loading...` : `${this.state.newPostIDs.length} new ${updateMessageQualifier}`
				}
			</Notification>
		}

		return (
			<Page sans_serif near_black pa0 ma0>
				<Head>
					<title>{raceName} – dotwatcher.cc</title>
					<meta property="og:title" content={`${raceName} – dotwatcher.cc`}/>
					<meta property="og:image" content=""/>
				</Head>
				<Header
					title="dotwatcher.cc"
					raceName={raceName}
				/>
				<MapContainer raceID={trackleadersID}/>
				<KeyEventsWrapper fl ph3 ph4_ns pb2 w_100 w_30_m w_20_l mt4_l>
					<TopRiders raceID={raceID}/>
					<KeyEvents posts={this.state.posts}/>
				</KeyEventsWrapper>
				<PostsWrapper fl ph3 pb2 w_100 w_70_m w_40_l id="posts">
					{ newPostsNotification }
					{
						this.state.posts.length ? this.state.posts.map(item => (
							<Post key={item.sys.id} id={item.sys.id} data={item.data}/>
						)) : null
					}
					{ morePosts }
				</PostsWrapper>
			</Page>
		);
	}
}

export default withRouter(Race);
