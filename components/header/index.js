import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tachyons from 'styled-components-tachyons';
import {Link} from '../../routes';
import Logo from './logo';

const Header = styled.header`${tachyons}`;
const A = styled.a`${tachyons}`;
const Nav = styled.div`${tachyons}`;

const Banner = ({title}) => (
	<Header bg_near_black near_white ph4 pv3 cf dt w_100 fixed_l z_1>
		<Logo>{title}</Logo>
		<Nav dtc tr ma0 v_mid>
			<Link href="/" as="/" passHref prefetch>
				<A mr3 f4 lh_copy white>Races</A>
			</Link>
			<Link route="page" params={{type: 'page', id: '1BgGLGEpckYcmoEE6Cqc0I'}} passHref>
				<A ml3 f4 lh_copy white>About</A>
			</Link>
		</Nav>
	</Header>
);

Banner.propTypes = {
	title: PropTypes.string.isRequired
};

export default Banner;
