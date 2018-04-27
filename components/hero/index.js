import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tachyons from 'styled-components-tachyons';

const Header = styled.header`${tachyons}`;
const H1 = styled.h1`${tachyons}`;
const H2 = styled.h2`${tachyons}`;

const Hero = ({title, byline}) => (
	<Header bg_washed_blue black_90 ph4 pb4 className="cf">
		<H1 f_headline mb0>{title}</H1>
		<H2 f1 mt0 measure_narrow>{byline}</H2>
	</Header>
);

Hero.propTypes = {
	title: PropTypes.string.isRequired,
	byline: PropTypes.string.isRequired
};

export default Hero;
