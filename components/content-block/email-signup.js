import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tachyons from 'styled-components-tachyons';
import MailchimpSubscribe from 'react-mailchimp-subscribe';

const mailchimpURL = process.env.MAILCHIMP || '';

const Div = styled.div`${tachyons}`;
const Form = styled.form`${tachyons}`;
const Header = styled.header`${tachyons}`;
const H2 = styled.h2`${tachyons}`;
const P = styled.p`${tachyons}`;
const EmailInput = styled.input`
	&:focus {
		border-color: var(--gold);
		background-color: var(--light-yellow);
	}
${tachyons}`;
const SubmitButton = styled.button`
	&:focus, &:hover {
		border-color: var(--blue);
		color: var(--white);
		background-color: var(--blue);
		outline: 0;
	}
	&:active {
		border-color: var(--gold);
		background-color: var(--gold);
	}
${tachyons}`;
const Message = styled.div`
	a:link, a:visited {
		color: var(--blue)
	}
	a:hover {
		color: var(--light-blue)
	}
${tachyons}`;

const CustomForm = ({status, message, onValidated}) => {
	let email;
	const submit = () =>
		email &&
		onValidated({
			EMAIL: email.value
		});

	if (message && message.startsWith('0 - ')) {
		message = message.split('0 - ')[1];
	}

	return (
		<Form fl w_100 w_60_m
			w_60_l onSubmit={
				e => {
					e.preventDefault();
					submit();
				}
			}
		>
			<EmailInput
				innerRef={node => email = node}
				type="email"
				placeholder="your.name@email.com"
				input_reset bb bw1
				b__light_silver ph3
				pv2 mt4
				mb2 f5 br_0
				bt_0 bl_0 f4
				fl w_100 w_70_ns
			/>
			<SubmitButton f4 bg_white fl w_100 w_30_ns ph3 pv2 mt4 mb2 center tc blue tracked ttl small_caps ba bw1 br_0_ns bt_0_ns bl_0_ns b__blue type="submit">
				Subscribe
			</SubmitButton>
			{status === 'sending' && <Message fl w_70 ph3 f6 lh_copy>sending...</Message>}
			{status === 'error' && (
				<Message fl w_70 red ph3 f6 lh_copy dangerouslySetInnerHTML={{__html: message}}/>
			)}
			{status === 'success' && (
				<Message fl w_70 ph3 f6 lh_copy dangerouslySetInnerHTML={{__html: message}}/>
			)}
		</Form>
	);
};

const EmailSignup = ({block}) => (
	<Div mh4_m mh6_l mb4 ph4 ph0_ns className="cf">
		<Header fl w_100 w_40_m w_40_l>
			<H2 mt0 mb2 lh_title>{block.heading}</H2>
			<P mt0 lh_copy>{block.words}</P>
		</Header>
		<MailchimpSubscribe
			url={mailchimpURL}
			render={({subscribe, status, message}) => (
				<CustomForm
					status={status}
					message={message}
					onValidated={formData => subscribe(formData)}
					url={mailchimpURL}
				/>
			)}
		/>
	</Div>
);

EmailSignup.propTypes = {
	block: PropTypes.object.isRequired
};

CustomForm.propTypes = {
	status: PropTypes.string,
	message: PropTypes.string,
	onValidated: PropTypes.func.isRequired
};

CustomForm.defaultProps = {
	status: '',
	message: ''
};

export default EmailSignup;
