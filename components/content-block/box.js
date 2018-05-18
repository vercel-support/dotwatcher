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
	left: var(--spacing-large);
	right: var(--spacing-large);
	transform: translate(0, -50%);
${tachyons}`;
const P = styled.p`${tachyons}`;

const Box = ({block}) => (
	<Wrapper w_100 w_third_ns ph4 mt4 mb5 className="cf">
		<Div aspect_ratio aspect_ratio__1x1 mb4 bg_near_black>
			<Div aspect_ratio__object z_1>
				<VerticallyCenter>
					<H2 f3 f3_l ttu tracked white tc lh_title ma0>{block.heading}</H2>
					<P f4 white lh_copy tc mt3 mb0>{block.words}</P>
				</VerticallyCenter>
			</Div>
			<Div aspect_ratio__object z_0 cover bg_center className="dim" style={{backgroundImage: `url(${block.image.fields.file.url})`}}/>
		</Div>
	</Wrapper>
);

Box.propTypes = {
	block: PropTypes.object.isRequired
};

export default Box;
