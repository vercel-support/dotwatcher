import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tachyons from 'styled-components-tachyons';

const Figure = styled.figure`${tachyons}`;
const Figcaption = styled.figcaption`
	font-size: .625em;
${tachyons}`;
const Img = styled.img`${tachyons}`;

const Image = ({data}) => {
	return (
		<Figure ma0 mb4 pa0 mw7>
			<Img img db bg_light_gray
				alt={data.title}
				src={`${data.file.url}?w=400fm=jpg&q=60`}
				srcSet={`${data.file.url}?w=400&fm=jpg&q=60 768w,
					${data.file.url}?w=600&fm=jpg&q=60 1024w`}
				sizes="200vw"
			/>
			{
				data.description ?
					<Figcaption tr pv1 lh_solid gray>
						{data.description}
					</Figcaption> :
					null
			}
		</Figure>
	);
};

Image.propTypes = {
	data: PropTypes.object.isRequired
};

export default Image;
