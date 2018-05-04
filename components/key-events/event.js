import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import tachyons from 'styled-components-tachyons';
import slugify from '../../utils/slugify';
import DateTime from '../datetime';

const Title = styled.span`${tachyons}`;
const A = styled.a`${tachyons}`;
const Item = styled.li`${tachyons}`;

const event = ({data}) => {
	return (
		<Item mb4>
			<A f6 lh_title link near_black hover_blue db underline_hover href={'#' + slugify(data.title)}>
				<DateTime datetime={data.date} type="inline"/>
				<Title db measure_narrow>
					{
						data.title.split(' ').length > 14 ? `${data.title.split(' ').splice(0,14).join(' ')}...` : data.title
					}
				</Title>
			</A>
		</Item>
	);
};

event.propTypes = {
	data: PropTypes.object.isRequired
};

export default event;
