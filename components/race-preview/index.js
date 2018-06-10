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

const RacePreview = ({data, id}) => {
	return (
		<Div className="with-divider cf">
			<Figure ma0 pa0 fl ph3 w_20>
				<Link route="race" params={{type: 'race', id}} passHref prefetch>
					<a>
						{ data.icon ? <Img mw_100 srcSet={`${data.icon.fields.file.url}?w=150&h=150&fm=jpg&q=50 768w, ${data.icon.fields.file.url}?w=300&h=300&fm=jpg&q=50 769w`} src={`${data.icon.fields.file.url}?w=300&h=300&fm=jpg&q=50`} alt={data.icon.fields.description}/> : <Placeholder w_100 h_100 pv6 bg_light_gray/> }
					</a>
				</Link>
			</Figure>
			<Div fl_ns ph3 w_80_ns>
				<Link route="race" params={{type: 'race', id}} passHref prefetch>
					<A link near_black>
						<H1 f2 ma0 lh_title link hover_blue>{widont(data.title)}</H1>
						<H3 ma0 mt2 f6 fw4><Span fw6>Start:</Span> {moment(data.raceDate).format('LLLL')}</H3>
						<P measure_wide lh_copy>{widont(data.description)}</P>
						<Span link underline hover_blue>
							{
								moment(data.raceEndDate).isBefore() ? `Look back at the race »` : `Follow the race »`
							}
						</Span>
					</A>
				</Link>
			</Div>
		</Div>
	);
};

RacePreview.propTypes = {
	data: PropTypes.object.isRequired,
	id: PropTypes.string.isRequired
};

export default RacePreview;
