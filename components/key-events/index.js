import PropTypes from 'prop-types';
import React, {Component} from 'react';
import styled from 'styled-components';
import tachyons from 'styled-components-tachyons';
import Event from './event';

const H2 = styled.h2`${tachyons}`;
const Header = styled.header`${tachyons}`;
const List = styled.ul`${tachyons}`;
const Toggle = styled.a`${tachyons}`;

class KeyEvents extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showMore: false,
			keyEventsOffset: 0,
			keyEventsWidth: 0,
			fixed: false,
			width: 320
		};
		this.toggleHidden = this.toggleHidden.bind(this);
	}

	componentDidMount() {
		this.setState({width: window.innerWidth});
		this.setupStickyScroll()
	}

	componentWillUnmount() {
		if (this.state.width > 1024) {
			document.removeEventListener('scroll', this.handleScroll);
		}
	}

	setupStickyScroll() {
		document.addEventListener('scroll', this.handleScroll.bind(this));
		const keyEventsContainer = document.querySelector('#key-events-wrap');
		this.setState({
			keyEventsOffset: keyEventsContainer.getBoundingClientRect().top,
			keyEventsWidth: keyEventsContainer.offsetWidth
		});
	}

	handleScroll() {
		const scroll = window.pageYOffset;
		this.setState({
			fixed: scroll > this.state.keyEventsOffset
		});
	}

	render() {
		const Div = styled.div`
		@media screen and (min-width: 60em) {
			position: ${this.state.fixed ? 'fixed' : 'relative'};
			top: ${this.state.fixed ? '0px' : 'inherit'};
			width: ${this.state.fixed ? this.state.keyEventsWidth + 'px' : '100%'};
			overflow: scroll;
			height: 90vh;
		}
		${tachyons}`;
		const keyEvents = this.props.posts.filter(post => post.data.keyEvent === true);
		const lessKeyEvents = keyEvents.slice(0, 5);
		const keyEventsToShow = this.state.showMore ? keyEvents : lessKeyEvents;
		return (
			<Div id="key-events-wrap">
				<Header>
					<H2 bb bw1 b__light_blue measure_narrow>
						Key moments
					</H2>
				</Header>
				<List list="true" pa0>
					{
						keyEventsToShow
							.map(post => (
								<Event key={post.sys.id} data={post.data}/>
							))
					}
					{
						keyEvents.length > 5 ? (
							<Toggle link f6 underline_hover hover_blue onClick={this.toggleHidden}>
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
	posts: PropTypes.array.isRequired
};

export default KeyEvents;
