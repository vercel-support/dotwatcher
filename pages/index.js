import React, {Component} from 'react';
import {createClient} from 'contentful';

import Header from '../components/header';
import Hero from '../components/hero';
import Wrapper from '../components/shared/wrapper';
import Post from '../components/post';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			posts: []
		};
	}

	componentDidMount() {
		const client = createClient({
			space: '6hyijb95boju',
			accessToken: 'f214dba82579af555cd4839172570328cf8aee10e37bf5b83094953bb65fb317'
		});

		client.getEntries()
			.then(entries => {
				console.log('entries', entries.items);
				this.setState({
					posts: entries.items
				});
			});
	}

	render() {
		return (
			<div>
				<Header title="dotwatchers.cc"/>
				<Hero title="Follow the ride" byline="The best way to track the latest epic bike rides"/>
				<Wrapper>
					{
						this.state.posts.map(item => (
							<Post key={item.sys.id} title={item.fields.name} body={item.fields.biography}/>
						))
					}
				</Wrapper>
			</div>
		);
	}
}

export default App;
