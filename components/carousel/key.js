import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tachyons from 'styled-components-tachyons';
import Wrapper from '../shared/wrapper';
import widont from '../../utils/widont';
import {Link} from '../../routes';

const H2 = styled.h2`${tachyons}`;
const P = styled.p`${tachyons}`;
const A = styled.a`${tachyons}`;
const Span = styled.span`${tachyons}`;

const CarouselKey = ({slide, setActiveKey, activeKey}) => {
	const Div = styled.div`
		background-color: var(--${activeKey === slide.sys.id ? 'near-white' : 'white'});
		& + div {
			border-top-style: solid;
		}
	${tachyons}`;
	return (
		<Div flex_auto pt3 pb3 pb1_ns ph3 pl4_l db no_underline hover_bg_near_white bw1 b__near_white className="cf" onClick={setActiveKey}>
			<H2 f5 f3_l near_black mt0 mb2>{widont(slide.heading)}</H2>
			<P f6 f5_l measure ma0 lh_copy near_black>
				{widont(slide.words)}
			</P>
			<Link route="race" params={{type: 'race', id: slide.race.sys.id}} passHref prefetch>
				<A dib f6 f5_l mt2 mb0>
					<Span className="highlight" link underline near_black>
						{slide.callToAction ? slide.callToAction : 'Read more'} »
					</Span>
				</A>
			</Link>
		</Div>
	);
}

CarouselKey.propTypes = {
	slide: PropTypes.object.isRequired,
	setActiveKey: PropTypes.func.isRequired,
	activeKey: PropTypes.string.isRequired
};

export default CarouselKey;
