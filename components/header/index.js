import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tachyons from 'styled-components-tachyons';
import {Link} from '../../routes';
import Logo from './logo';

const Header = styled.header`${tachyons}`;
const A = styled.a`${tachyons}`;
const Nav = styled.div`
	margin-left: auto;
${tachyons}`;
const H1 = styled.h1`${tachyons}`;
const H2 = styled.h2`${tachyons}`;
const Div = styled.div`
	@media (min-width: 64em) {
		width: 200px;
	}
	width: 120px;
	margin-left: var(--spacing-large)
`;

const Banner = ({title, raceName}) => (
	<Header bg_near_black near_white w_100 fixed_l z_1 flex self_start className="cf">
		<H1 flex items_center f2 pv3 ma0 fw5 lh_solid w_40_l>
			<Div>
				<Logo>{title}</Logo>
			</Div>
		</H1>
		{ raceName ? <H2 ph3 pv3 flex items_center f3 ma0 lh_solid fw5>{raceName}</H2> : null}
		<Nav ph4 pv3 lh_solid f2 flex_grow flex items_center>
			<Link href="/" as="/" passHref prefetch>
				<A dib mr3 f5 f4_l white fw5>Races</A>
			</Link>
			<Link route="page" params={{type: 'page', id: '1BgGLGEpckYcmoEE6Cqc0I'}} passHref>
				<A dib ml3 f5 f4_l white fw5>About</A>
			</Link>
		</Nav>
	</Header>
);

Banner.propTypes = {
	title: PropTypes.string.isRequired,
	raceName: PropTypes.string
};

Banner.defaultProps = {
	raceName: ''
};

export default Banner;
