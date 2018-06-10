import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';
import tachyons from 'styled-components-tachyons';
import {Link} from '../../routes';
import Logo from './logo';

const A = styled.a`${tachyons}`;
const Nav = styled.div`
	margin-left: auto;
${tachyons}`;
const H1 = styled.h1`${tachyons}`;
const H2 = styled.h2`${tachyons}`;
const Div = styled.div`
	@media screen and (min-width: 64em) {
		width: 170px;
	}
	width: 120px;
	margin-left: var(--spacing-large)
`;

class Banner extends Component {
	constructor(props) {
		super(props);
		this.state = {
			bannerHeight: 0,
			fixed: false,
			width: 320,
			lastScrollY: 0
		};
		this.boundHeaderPop = this.debounce(this.headerPop.bind(this), 50);
	}

	componentDidMount() {
		this.setState({width: window.innerWidth});
		this.setupStickyHeader();
	}

	componentWillUnmount() {
		if (this.state.width > 1024) {
			document.removeEventListener('scroll', this.boundHeaderPop);
		}
	}

	setupStickyHeader() {
		document.addEventListener('scroll', this.boundHeaderPop);
		const banner = document.querySelector('#banner');
		this.setState({
			bannerHeight: banner.offsetHeight
		});
	}

	debounce(fn, delay) {
		let timer = null;
		return () => {
			const context = this;
			const args = arguments;
			clearTimeout(timer);
			timer = setTimeout(() => {
				fn.apply(context, args);
			}, delay);
		};
	}

	headerPop() {
		const {lastScrollY} = this.state;
		const currentScrollY = window.scrollY;
		const stickyBar = document.getElementById('sticky');

		if (currentScrollY < this.state.bannerHeight) {
			this.setState({fixed: false});
			if (stickyBar) {
				stickyBar.style.top = 'var(--spacing-large)';
			}
		} else if (currentScrollY < lastScrollY) {
			this.setState({fixed: true});
			if (stickyBar) {
				stickyBar.style.top = this.state.bannerHeight + 32 + 'px';
			}
		} else {
			this.setState({fixed: false});
			if (stickyBar) {
				stickyBar.style.top = 'var(--spacing-large)';
			}
		}
		this.setState({lastScrollY: currentScrollY});
	}

	render() {
		const Header = styled.header`
			position: relative;
			top: 0;
			${props => props.isFixed && css`
				position: fixed;
			`}
			${tachyons}`;
		const padTop = this.state.fixed ? <Div style={{height: this.state.bannerHeight}}/> : null;
		return (
			<React.Fragment>
				{padTop}
				<Header bg_white bb b__light_gray near_black w_100 z_2 flex self_start className="cf" id="banner" isFixed={this.state.fixed}>
					<H1 flex items_center f2 pv3 ma0 fw5 lh_solid w_40_l>
						<Div>
							<Logo>{this.props.title}</Logo>
						</Div>
					</H1>
					{this.props.raceName ? <H2 dn pa3 flex_ns items_center f3 ma0 lh_solid fw5><Link route="race" params={{type: 'race', id: this.props.race.sys.id}} passHref prefetch><A no_underline near_black hover_blue>{this.props.race.fields.title}</A></Link></H2> : null}
					<Nav ph4 pv3 lh_solid f2 flex_grow flex items_center>
						<Link href="/races" as="/races" passHref prefetch>
							<A dib mr3 f5 f4_l near_black fw4>Races</A>
						</Link>
						<Link route="page" params={{type: 'page', id: '1BgGLGEpckYcmoEE6Cqc0I'}} passHref>
							<A dib ml3 f5 f4_l near_black fw4>About</A>
						</Link>
					</Nav>
				</Header>
			</React.Fragment>
		);
	}
}

Banner.propTypes = {
	title: PropTypes.string.isRequired,
	raceName: PropTypes.string,
	race: PropTypes.object
};

Banner.defaultProps = {
	raceName: '',
	race: {}
};

export default Banner;
