import React from 'react';
import styled from 'styled-components';
import tachyons from 'styled-components-tachyons';
import SocialIcons from '../shared/social-icons'

const Div = styled.div`${tachyons}`;
const H2 = styled.h2`${tachyons}`;
const P = styled.p`${tachyons}`;
const A = styled.a`${tachyons}`;

const Footer = () => {
	return (
		<Div fl w_100 bg_near_white mt5 className="cf">
			<Div pv3 mh6_l>
				<Div fl w_100 w_50_ns ph3 mb4>
					<H2 f3 mb2 fw6>About</H2>
					<P lh_copy measure_narrow dark_gray>DotWatcher is here to showcase the best of long distance self-supported bike racing.</P>
						<SocialIcons size="2" colour="near-black"/>
				</Div>
				<Div fl w_100 w_25_ns ph3 mb4>
					<H2 f3 mb2 fw6>Partner</H2>
					<P lh_copy measure_narrow dark_gray>If you have a race you would like us to cover email us at <A link near_black underline hover_blue href="mailto:info@dotwatcher.cc">info@dotwatcher.cc</A></P>
				</Div>
				<Div fl w_100 w_25_ns ph3 mb4>
					<H2 f3 mb2 fw6>Contact</H2>
					<P lh_copy measure_narrow dark_gray>If you would like to get in touch email us at <A link near_black underline hover_blue href="mailto:info@dotwatcher.cc">info@dotwatcher.cc</A></P>
				</Div>
			</Div>
		</Div>
	);
};

export default Footer;
