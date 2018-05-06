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
			<Img img db bg_light_gray src={data.file.url} alt={data.title}/>
			{
				data.description ?
					<Figcaption tr pv1 lh_solid gray>
						{data.description}
					</Figcaption>
					: null
			}
		</Figure>
	);
};

Image.propTypes = {
	data: PropTypes.object.isRequired
};

export default Image;
