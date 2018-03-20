import React from 'react';
import {withEntry} from '../data/with-entry';
import Header from '../components/header';
import Wrapper from '../components/shared/wrapper';
import Post from '../components/post';

class Race extends React.Component {
	render () {
		return <div>
			<Header
				title="dotwatcher.cc"
			/>
			<Wrapper>
				<Post key={this.props.post.sys.id} id={this.props.post.sys.id} data={this.props.post.data}/>
			</Wrapper>
		</div>
	}
}

export default withEntry(Race);
