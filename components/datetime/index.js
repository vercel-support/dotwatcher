import React from 'react';
import PropTypes from 'prop-types';
import TimeAgo from 'react-timeago';
import styled from 'styled-components';

const InlineTimeAgo = styled(TimeAgo)`
	display: inline-block;
	margin-bottom: var(--spacing-extra-small);
	font-size: .875rem;
	font-weight: bold;
`;

const FloatedTimeAgo = styled(TimeAgo)`
	float: left;
	width: 33%;
	font-size: .875rem;
	padding: var(--spacing-small) 0;
	text-decoration: underline;
`;

const DateTime = ({datetime, type}) => {
	if (type === 'inline') {
		return (
			<InlineTimeAgo date={datetime}>
				{datetime}
			</InlineTimeAgo>
		);
	}
	return (
		<FloatedTimeAgo date={datetime}>
			{datetime}
		</FloatedTimeAgo>
	);
};

DateTime.propTypes = {
	datetime: PropTypes.string.isRequired,
	type: PropTypes.string
};

DateTime.defaultProps = {
	type: ''
};

export default DateTime;
