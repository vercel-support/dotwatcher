import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tachyons from 'styled-components-tachyons';
import {Link} from '../../routes';
import Placeholder from '../placeholder';
import widont from '../../utils/widont';

const A = styled.a`${tachyons}`;
const Div = styled.div`${tachyons}`;
const H1 = styled.h1`${tachyons}`;
const H3 = styled.h3`${tachyons}`;
const Figure = styled.figure`${tachyons}`;
const Img = styled.img`${tachyons}`;
const Span = styled.span`${tachyons}`;
const P = styled.p`${tachyons}`;
const H2 = styled.h2`${tachyons}`;
const Header = styled.header`${tachyons}`;
const Wrap = styled.dl`${tachyons}`;
const Label = styled.dt`${tachyons}`;
const Stat = styled.dt`${tachyons}`;

const RacePreview = ({data, id, slug}) => {
	return (
		<Div className="with-divider cf">
			<Figure ma0 pa0 fl ph3 w_20>
				<Link route="race" params={{type: 'race', id: slug}} passHref prefetch>
					<a>
						{ data.icon ? <Img mw_100 srcSet={`${data.icon.fields.file.url}?w=150&h=150&fm=jpg&q=50 768w, ${data.icon.fields.file.url}?w=300&h=300&fm=jpg&q=50 769w`} src={`${data.icon.fields.file.url}?w=300&h=300&fm=jpg&q=50`} alt={data.icon.fields.description}/> : <Placeholder w_100 h_100 pv6 bg_light_gray/> }
					</a>
				</Link>
			</Figure>
			<Div fl_ns ph3 w_50_m w_60_l>
				<Link route="race" params={{type: 'race', id: slug}} passHref prefetch>
					<A link near_black>
						<H1 f2 fw6 ma0 lh_title link hover_blue>{widont(data.title)}</H1>
						<H3 ma0 mt2 f6 fw4><Span fw6>Start:</Span> {moment(data.raceDate).format('LLLL')}</H3>
						<P measure_wide lh_copy>{widont(data.description)}</P>
						<Span dib f6 ttu fw5 tracked ba bw1 pv2 ph3 hover_blue>
							{
								moment(data.raceEndDate).isBefore() ? `Look back at the race »` : `Follow the race »`
							}
						</Span>
					</A>
				</Link>
			</Div>
			<Div fl_ns ph3 w_30_m w_20_l>
				<Header>
					<H2 ttu tracked f5 fw6 mt4 mt2_ns pb1 bb bw1 b__light_gray measure_narrow>
						Fact file
					</H2>
				</Header>
				{
					data.location ? (
						<Wrap>
							<Label dib f6>Location:</Label>
							<Stat dib f6 ml1 fw6 >{data.location}</Stat>
						</Wrap>
					) : null
				}
				{
					data.length ? (
						<Wrap>
							<Label dib f6>Length:</Label>
							<Stat dib f6 ml1 fw6>{data.length}</Stat>
						</Wrap>
					) : null
				}
				{
					data.riders ? (
						<Wrap>
							<Label dib f6>Riders:</Label>
							<Stat dib f6 ml1 fw6>{data.riders}</Stat>
						</Wrap>
					) : null
				}
				{
					data.lastYearsWinner ? (
						<Wrap>
							<Label dib f6>
								{
									data.winnerLabel ? `${data.winnerLabel}:` : `Last year’s winner:`
								}
							</Label>
							<Stat dib f6 ml1 fw6>{data.lastYearsWinner}</Stat>
						</Wrap>
					) : null
				}
				{
					data.terrain ? (
						<Wrap>
							<Label dib f6>Terrain:</Label>
							<Stat dib f6 ml1 fw6>{data.terrain}</Stat>
						</Wrap>
					) : null
				}
			</Div>
		</Div>
	);
};

RacePreview.propTypes = {
	data: PropTypes.object.isRequired,
	id: PropTypes.string.isRequired
};

export default RacePreview;
