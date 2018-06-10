import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tachyons from 'styled-components-tachyons';
import {Link} from '../../routes';

const Div = styled.div`${tachyons}`;
const A = styled.a`${tachyons}`;
const BackgroundImage = styled.div`
	background-image: url(${props => props.bg}?w=600&fm=jpg&q=80);
	@media screen and (min-width: 64em) {
		background-image: url(${props => props.bg}?w=800&fm=jpg&q=80);
	}
${tachyons}`;

const CarouselImage = ({slide}) => (
	<Link route="race" params={{type: 'race', id: slide.race.sys.id}} passHref prefetch>
		<A db className="cf">
			<Div aspect_ratio aspect_ratio__8x5 z_0>
				<BackgroundImage aspect_ratio__object cover bg_center bg={slide.image.fields.file.url}/>
			</Div>
		</A>
	</Link>
);

CarouselImage.propTypes = {
	slide: PropTypes.object.isRequired
};

export default CarouselImage;
