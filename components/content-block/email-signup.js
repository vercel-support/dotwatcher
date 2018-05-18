import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tachyons from 'styled-components-tachyons';
import Wrapper from '../shared/wrapper';

const Div = styled.div`
	&:hover .dim {
		opacity: .6;
	}
${tachyons}`;
const H2 = styled.h2`${tachyons}`;
const VerticallyCenter = styled.div`
	position: absolute;
	top: 50%;
	left: var(--spacing-large);
	right: var(--spacing-large);
	transform: translate(0, -50%);
${tachyons}`;
const P = styled.p`${tachyons}`;

const EmailSignup = ({block}) => (
	<Div mh4_m mh6_l mb4 mb5_ns className="cf">
		<h2>hello worlds</h2>
	</Div>
);

EmailSignup.propTypes = {
	block: PropTypes.object.isRequired
};

export default EmailSignup;
