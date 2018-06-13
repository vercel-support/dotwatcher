import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import tachyons from 'styled-components-tachyons';
import slugify from '../../utils/slugify';
import DateTime from '../datetime';

const Title = styled.span`${tachyons}`;
const A = styled.a`${tachyons}`;
const Item = styled.li`${tachyons}`;

const event = ({data, index, skip, id}) => {
	let href = `#${slugify(data.title)}`
	if (index > skip) {
		href = `/post/${id}`
	}
	return (
		<Item mb4>
			<A f6 lh_title link near_black hover_blue db underline_hover href={href}>
				<DateTime datetime={data.date} type="inline"/>
				<Title db measure_narrow>
					{
						data.title.split(' ').length > 14 ? `${data.title.split(' ').splice(0, 14).join(' ')}...` : data.title
					}
				</Title>
			</A>
		</Item>
	);
};

event.propTypes = {
	data: PropTypes.object.isRequired,
	index: PropTypes.number.isRequired,
	skip: PropTypes.number.isRequired
};

export default event;
