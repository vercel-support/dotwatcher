import { Link, Router } from '../../routes'
import PropTypes from 'prop-types';
import React from 'react';
import TimeAgo from 'react-timeago';
import styled from 'styled-components';
import tachyons from 'styled-components-tachyons';
import slugify from '../../utils/slugify';

const A = styled.a`${tachyons}`;
const Item = styled.li`${tachyons}`;
const StyledTimeAgo = styled(TimeAgo)`
	display: inline-block;
	margin-bottom: var(--spacing-extra-small);
	font-size: .875rem;
	font-weight: bold;
`;

const event = ({data, id}) => {
	return (
		<Item mb4>
			<StyledTimeAgo date={data.date}>
				{data.date}
			</StyledTimeAgo>
				<A f6 lh_title link dim near_black underline db href={'#' + id}>{data.title}</A>
		</Item>
	);
};

event.propTypes = {
	data: PropTypes.object.isRequired
};

export default event;
