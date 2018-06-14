import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tachyons from 'styled-components-tachyons';
import slugify from 'slugify';
import Link from 'next/link';

const A = styled.a`
	background-image: url(${props => props.bg}?w=600&fm=jpg&q=80);
	min-height: 66vw;
	@media screen and (min-width: 32em) {
		min-height: 34vw;
	}
	@media screen and (min-width: 48em) {
		background-image: url(${props => props.bg}?w=800&h=800&fm=jpg&q=80);
	}
	@media screen and (min-width: 64em) {
		background-image: url(${props => props.bg}?w=800&fm=jpg&q=80);
	}
	@media screen and (min-width: 75em) {
		background-image: url(${props => props.bg}?w=1200&fm=jpg&q=80);
	}
${tachyons}`;

const CarouselImage = ({slide}) => (
	<Link as={`race/${slugify(slide.race.data.title, {lower: true})}`} href={`race?id=${slide.race.sys.id}`} passHref prefetch>
		<A db h_100 cover bg_center bg={slide.image.fields.file.url} className="cf">
		</A>
	</Link>
);

CarouselImage.propTypes = {
	slide: PropTypes.object.isRequired
};

export default CarouselImage;
