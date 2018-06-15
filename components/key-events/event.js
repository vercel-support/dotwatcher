import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import tachyons from 'styled-components-tachyons';
import slugify from '../../utils/slugify';
import quotes from '../../utils/quotes';
import DateTime from '../datetime';

const Title = styled.span`${tachyons}`;
const A = styled.a`${tachyons}`;
const Item = styled.li`${tachyons}`;

const event = ({data, id, loaded}) => {
	const href = loaded ? `#${slugify(data.title)}` : `/post/${id}`;
	return (
		<Item mb4>
			<A f6 lh_title link near_black hover_blue db underline_hover href={href}>
				<DateTime datetime={data.date} type="inline"/>
				<Title db measure_narrow>
					{
						quotes(data.title.split(' ').length > 14 ? `${data.title.split(' ').splice(0, 14).join(' ')}...` : data.title)
					}
				</Title>
			</A>
		</Item>
	);
};

event.propTypes = {
	data: PropTypes.object.isRequired,
	id: PropTypes.string.isRequired,
	loaded: PropTypes.bool.isRequired
};

export default event;
