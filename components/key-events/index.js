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
			width: 320
		};
		this.toggleHidden = this.toggleHidden.bind(this);
		this.boundHandleScroll = this.handleScroll.bind(this);
	}

	componentDidMount() {
		this.setState({width: window.innerWidth});
		this.setupStickyScroll();
	}

	componentWillUnmount() {
		document.removeEventListener('scroll', this.boundHandleScroll);
	}

	setupStickyScroll() {
		document.addEventListener('scroll', this.boundHandleScroll);
	}

	handleScroll() {
		if (this.state.width >= 1024) {
			const windowHeight = document.body.scrollHeight;
			document.getElementById('events-wrap').style.height = windowHeight - 400 + 'px';
		}
	}

	render() {
		const Div = styled.div`
			@media screen and (min-width: 64em) {
				position: sticky;
				top: var(--spacing-large);
			}
		${tachyons}`;
		const keyEvents = this.props.posts.filter(post => post.data.keyEvent === true);
		const lessKeyEvents = keyEvents.slice(0, 5);
		const keyEventsToShow = this.state.showMore ? keyEvents : lessKeyEvents;
		return (
			<Div fl w_50 w_100_ns pl3 pl0_ns id="sticky">
				<Header>
					<H2 ttu tracked f5 bb bw1 pb1 b__light_gray measure_narrow mt0 mt3_ns>
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
