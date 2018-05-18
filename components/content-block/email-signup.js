import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tachyons from 'styled-components-tachyons';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import Wrapper from '../shared/wrapper';

const mailchimpURL = process.env.MAILCHIMP || '';

const Div = styled.div`
	&:hover .dim {
		opacity: .6;
	}
${tachyons}`;
const H2 = styled.h2`${tachyons}`;
const P = styled.p`${tachyons}`;

const EmailSignup = ({block}) => (
	<Div mh4_m mh6_l mb4 mb5_ns className="cf">
		<H2 fl mt0>{block.heading}</H2>
		<P fl mt0>{block.words}</P>
		<MailchimpSubscribe
			url={mailchimpURL}
		/>
	</Div>
);

EmailSignup.propTypes = {
	block: PropTypes.object.isRequired
};

export default EmailSignup;
