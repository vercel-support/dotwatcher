import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tachyons from 'styled-components-tachyons';

const H1 = styled.h1`${tachyons}`;
const A = styled.a`${tachyons}`;

const Logo = ({children}) => (
	<H1 dtc ma0 fw6 lh_solid>
		<Link href="/" as="/">
			<A near_white hover_white>
				{children}
			</A>
		</Link>
	</H1>
);

Logo.propTypes = {
	children: PropTypes.string.isRequired
};

export default Logo;
