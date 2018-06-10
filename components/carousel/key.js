import React from 'react';
import PropTypes from 'prop-types';
import styled, {keyframes} from 'styled-components';
import tachyons from 'styled-components-tachyons';
import moment from 'moment';
import widont from '../../utils/widont';
import {Link} from '../../routes';

const onAir = keyframes`
  0%, 100% {
    opacity: 1;
  }

  50% {
    opacity: .5;
  }
`;
const H2 = styled.h2`${tachyons}`;
const P = styled.p`${tachyons}`;
const A = styled.a`${tachyons}`;
const Span = styled.span`${tachyons}`;
const H2Live = styled.h2`
	&:before {
		content: '';
		width: .75em;
		height: .75em;
		position: absolute;
		left: -1.25rem;
		margin: .333rem 0 0;
		border-radius: 100%;
		background-color: var(--red);
		animation: ${onAir} 2s linear infinite;
	}

	@media screen and (min-width: 64em) {
		&:before {
			left: -1.5rem;
			margin: .375rem 0 0;
		}
	}
${tachyons}`;
const CarouselKey = ({slide, setActiveKey, activeKey}) => {
	const Div = styled.div`
		background-color: var(--${activeKey === slide.sys.id ? 'near-white' : 'white'});
		& + div {
			border-top-style: solid;
		}
	${tachyons}`;
	const isRaceLive = moment().isBetween(moment(slide.race.data.raceDate), moment(slide.race.data.raceEndDate));
	const Title = isRaceLive ? <H2Live f4 f3_ns lh_title ma0 near_black relative>{widont(slide.heading)}</H2Live> : <H2 f4 f3_ns lh_title ma0 near_black>{widont(slide.heading)}</H2>;

	return (
		<Div flex_auto pt3 pb3 pb1_ns pr3 pl4 db no_underline hover_bg_near_white bw1 b__near_white className="cf" onClick={setActiveKey}>
			{Title}
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
};

CarouselKey.propTypes = {
	slide: PropTypes.object.isRequired,
	setActiveKey: PropTypes.func.isRequired,
	activeKey: PropTypes.string.isRequired
};

export default CarouselKey;
