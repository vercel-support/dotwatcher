import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tachyons from 'styled-components-tachyons';

const Button = ({children, loading, ...styles}) => {
	const StyledButton = styled.a`
		background-color: var(--${loading ? 'gray' : 'blue'});
		&:hover {
			background-color: var(--${loading ? 'gray' : 'light-blue'});
		}
	${tachyons}`;

	return (
		<StyledButton f6 link dim br2 ph3 pv2 mv4 center tc white tracked ttu {...styles}>
			{children}
		</StyledButton>
	);
}

Button.propTypes = {
	children: PropTypes.node
};

Button.defaultProps = {
	children: ''
};

export default Button;
