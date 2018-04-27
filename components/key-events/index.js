import PropTypes from 'prop-types';
import React, {Component} from 'react';
import styled from 'styled-components';
import tachyons from 'styled-components-tachyons';
import Event from './event';

const H2 = styled.h2`${tachyons}`;
const List = styled.ul`${tachyons}`;
const Toggle = styled.a`${tachyons}`;

class KeyEvents extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showMore: false
		};
		this.toggleHidden = this.toggleHidden.bind(this);
	}

	render() {
		const Div = styled.div`
			position: ${this.props.isSticky ? 'fixed' : 'relative'};
			top: ${this.props.isSticky ? '90px' : '0'};
			width: ${this.props.isSticky ? '20%' : '100%'};
		${tachyons}`;

		const keyEvents = this.props.posts.filter(post => post.data.keyEvent === true);
		const lessKeyEvents = keyEvents.slice(0, 2);
		const keyEventsToShow = this.state.showMore ? keyEvents : lessKeyEvents;
		return (
			<Div>
				<header>
					<H2 pt3>
						Key moments {this.props.isSticky ? 'hi' : 'no'}
					</H2>
				</header>
				<List list="true" pa0>
					{
						keyEventsToShow
							.map(post => (
								<Event key={post.sys.id} data={post.data}/>
							))
					}
					{
						keyEvents.length > 5 ? (
							<Toggle link f6 underline_hover onClick={this.toggleHidden}>
								{
									this.state.showMore ? '▲ Show less' : '▼ Show more'
								}
							</Toggle>
						) : null
					}
				</List>
			</Div>
		);
	}

	toggleHidden() {
		this.setState(
			prevState => ({showMore: !prevState.showMore})
		);
	}
}

KeyEvents.propTypes = {
	posts: PropTypes.array.isRequired,
	isSticky: PropTypes.bool.isRequired
};

export default KeyEvents;
