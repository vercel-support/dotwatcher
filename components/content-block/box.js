import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tachyons from 'styled-components-tachyons';
import Wrapper from '../shared/wrapper';

const Div = styled.div`
	&:hover .dim {
		opacity: .6;
	}
${tachyons}`;
const H2 = styled.h2`${tachyons}`;
const VerticallyCenter = styled.div`
	position: absolute;
	top: 50%;
	left: var(--spacing-medium);
	right: var(--spacing-medium);
	transform: translate(0, -50%);
	@media screen and (min-width: 60em) {
		left: var(--spacing-large);
		right: var(--spacing-large);
	}
${tachyons}`;
const P = styled.p`${tachyons}`;

const Box = ({block}) => (
	<Wrapper w_100 w_third_ns ph4 mt4_ns mb5_ns className="cf">
		<Div aspect_ratio aspect_ratio__1x1 mb4 bg_near_black>
			<a href={block.link}>
				<Div aspect_ratio__object z_1>
					<VerticallyCenter>
						<H2 f3 f4_m f3_l fw6 ttu tracked white tc lh_title ma0>{block.heading}</H2>
						<P f4 f5_m white lh_copy tc mt3 mb0>{block.words}</P>
					</VerticallyCenter>
				</Div>
				<Div o_80 o_100_l aspect_ratio__object z_0 cover bg_center className="dim" style={{backgroundImage: `url(${block.image.fields.file.url})`}}/>
			</a>
		</Div>
	</Wrapper>
);

Box.propTypes = {
	block: PropTypes.object.isRequired
};

export default Box;
