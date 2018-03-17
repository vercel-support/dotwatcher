import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tachyons from 'styled-components-tachyons';

const H1 = styled.h1`${tachyons}`;

const Logo = ({children}) => (
	<H1 dtc ma0 fw6 lh_solid>{children}</H1>
);

Logo.propTypes = {
	children: PropTypes.string.isRequired
};

export default Logo;
