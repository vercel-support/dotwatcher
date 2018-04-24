import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import tachyons from 'styled-components-tachyons';
import slugify from '../../utils/slugify';
import DateTime from '../datetime';

const A = styled.a`${tachyons}`;
const Item = styled.li`${tachyons}`;

const event = ({data}) => {
	return (
		<Item mb4>
			<DateTime datetime={data.date} type="inline"/>
			<A f6 lh_title link dim near_black underline db href={'#' + slugify(data.title)}>{data.title}</A>
		</Item>
	);
};

event.propTypes = {
	data: PropTypes.object.isRequired
};

export default event;
