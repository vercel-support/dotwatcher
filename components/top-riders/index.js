import React from 'react';
import styled from 'styled-components';
import tachyons from 'styled-components-tachyons';

const H2 = styled.h2`${tachyons}`;
const Header = styled.header`${tachyons}`;
const Div = styled.div`${tachyons}`;
const Rider = styled.dl`${tachyons}`;
const RiderName = styled.dt`${tachyons}`;
const RiderDist = styled.dd`${tachyons}`;

const keyEvents = () => {
	return (
		<Div>
			<Header pt4_l>
				<H2 pt3>
					Top riders
				</H2>
			</Header>
			<Div>
				<Rider f6 mt0 mb2 lh_copy className="cf">
					<RiderName fl b underline>Thomas Hagler</RiderName>
					<RiderDist fr tr gray>735km</RiderDist>
				</Rider>
				<Rider f6 mt0 mb2 lh_copy className="cf">
					<RiderName fl b underline>Polly Fox</RiderName>
					<RiderDist fr tr gray>732km</RiderDist>
				</Rider>
				<Rider f6 mt0 mb2 lh_copy className="cf">
					<RiderName fl b underline>Kenneth Lira</RiderName>
					<RiderDist fr tr gray>730km</RiderDist>
				</Rider>
				<Rider f6 mt0 mb2 lh_copy className="cf">
					<RiderName fl b underline>Tom Pritchard</RiderName>
					<RiderDist fr tr gray>701km</RiderDist>
				</Rider>
				<Rider f6 mt0 mb2 lh_copy className="cf">
					<RiderName fl b underline>Millie Bowen</RiderName>
					<RiderDist fr tr gray>693km</RiderDist>
				</Rider>
			</Div>
		</Div>
	);
};

export default keyEvents;
