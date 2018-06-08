import React from 'react';
import PropTypes from 'prop-types';
import styled, {keyframes} from 'styled-components';
import tachyons from 'styled-components-tachyons';
import moment from 'moment';
import Wrapper from '../shared/wrapper';
import {Link} from '../../routes';
import slugify from '../../utils/slugify';
import widont from '../../utils/widont';

const onAir = keyframes`
  0%, 100% {
    opacity: 1;
  }

  50% {
    opacity: .5;
  }
`;
const A = styled.a`
	&:hover .highlight {
		color: var(--blue);
	}
	&+a {
		border-top: .125em solid var(--light-gray)
	}
${tachyons}`;
const H2 = styled.h2`${tachyons}`;
const H2Live = styled.h2`
	&:before {
		content: '';
		width: .75em;
		height: .75em;
		position: absolute;
		left: 1.25rem;
		margin: .625rem 0 0;
		border-radius: 100%;
		background-color: var(--red);
		animation: ${onAir} 2s linear infinite;
	}

	@media screen and (min-width: 64em) {
		&:before {
			left: .5rem;
			margin: .375rem 0;
		}
	}
${tachyons}`;
const BackgroundImage = styled.div`
	background-image: url(${props => props.bg}?w=1000);
	@media screen and (min-width: 64em) {
		background-image: url(${props => props.bg}?w=1200);
	}
${tachyons}`
const Div = styled.div`${tachyons}`;
const P = styled.p`${tachyons}`;
const Span = styled.span`${tachyons}`;

const BannerWithSegments = ({block, segments}) => {
	const isRaceLive = moment().isBetween(moment(block.race.data.raceDate), moment(block.race.data.raceEndDate));
	const Title = isRaceLive ? <H2Live f4 f3_ns bt bw1 b__white pt2 lh_title ma0 pl4 pr4 near_black relative>{widont(block.heading)}</H2Live> : <H2 f4 f3_ns bt bw1 b__white pt2 lh_title ma0 ph4 near_black>{widont(block.heading)}</H2>;
	const WordsWrap = styled.div`
		margin-left: var(--spacing-${isRaceLive ? 'extra-large' : 'large' });
	${tachyons}`;
	return (
		<Div mh3 mh6_l mb4 mb5_ns flex_ns className="cf">
			<Wrapper fl w_100 w_50_ns flex_auto_ns>
				<Link route="race" params={{type: 'race', id: block.race.sys.id}} passHref prefetch>
					<A db className="cf">
						<Div aspect_ratio aspect_ratio__3x4 aspect_ratio__1x1_l z_0>
							<BackgroundImage aspect_ratio__object cover bg_center bg={block.image.fields.file.url}>
								<Wrapper w_100 absolute bottom_0 className="cf">
									<Div bg_white_50 pb3>
										{Title}
										<WordsWrap>
											<P f5 mb0 lh_copy measure_narrow near_black>
												{widont(block.words)}
											</P>
											<P f5 mt2 mb0>
												<Span link underline near_black hover_white>
												</Span>
											</P>
										</WordsWrap>
									</Div>
								</Wrapper>
							</BackgroundImage>
						</Div>
					</A>
				</Link>
			</Wrapper>
			<Wrapper fl w_100 w_50_ns flex_auto flex flex_column bt bw1 b__white bt_0_ns>
				{
					segments.map(segment => (
						<Link route="race" params={{type: 'race', id: segment.race}} passHref prefetch>
							<A flex_auto pt3 pb3 pb1_ns pl3 pl4_l db no_underline bg_near_white hover_bg_moon_gray hover_b__ className="cf" key={segment.sys.id}>
									<H2 f4 f3_ns near_black mt0 mb2>{widont(segment.title)}</H2>
									<P f5 measure_narrow ma0 lh_copy near_black>
										{widont(segment.body)}
									</P>
									<P f5 mt2 mb0>
										<Span className="highlight" link underline near_black>
											{segment.callToAction}
										</Span>
									</P>
								</A>
							</Link>
					))
				}
			</Wrapper>
		</Div>
	);
};

BannerWithSegments.propTypes = {
	block: PropTypes.object.isRequired,
	segments: PropTypes.array
};

BannerWithSegments.defaultProps = {
	segments: []
};

export default BannerWithSegments;
