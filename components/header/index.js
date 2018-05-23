import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tachyons from 'styled-components-tachyons';
import {Link} from '../../routes';
import Logo from './logo';
import slugify from '../../utils/slugify';

const Header = styled.header`${tachyons}`;
const A = styled.a`${tachyons}`;
const Nav = styled.div`
	margin-left: auto;
${tachyons}`;
const H1 = styled.h1`${tachyons}`;
const H2 = styled.h2`${tachyons}`;
const Div = styled.div`
	@media screen and (min-width: 60em) {
		width: 200px;
	}
	width: 120px;
	margin-left: var(--spacing-large)
`;

const Banner = ({title, raceName, race}) => (
	<React.Fragment>
		<Header bg_white bb b__light_gray near_black w_100 z_1 relative flex self_start className="cf">
			<H1 flex items_center f2 pv3 ma0 fw5 lh_solid w_40_l>
				<Div>
					<Logo>{title}</Logo>
				</Div>
			</H1>
			{ raceName ? <H2 dn pa3 flex_ns items_center f3 ma0 lh_solid fw5><Link route="race" params={{type: 'race', id: race.sys.id, raceID: race.fields.trackleadersRaceId, slug: slugify(race.fields.title)}} passHref prefetch><A no_underline near_black hover_blue>{race.fields.title}</A></Link></H2> : null}
			<Nav ph4 pv3 lh_solid f2 flex_grow flex items_center>
				<Link href="/" as="/" passHref prefetch>
					<A dib mr3 f5 f4_l near_black fw4>Races</A>
				</Link>
				<Link route="page" params={{type: 'page', id: '1BgGLGEpckYcmoEE6Cqc0I'}} passHref>
					<A dib ml3 f5 f4_l near_black fw4>About</A>
				</Link>
			</Nav>
		</Header>
		{ raceName ? <H2 tc pv2 dn_ns f4 ma0 lh_solid fw6 bt bw3 b__light_blue><Link route="race" params={{type: 'race', id: race.sys.id, raceID: race.fields.trackleadersRaceId, slug: slugify(race.fields.title)}} passHref prefetch><A no_underline near_black hover_blue>{race.fields.title}</A></Link></H2> : null}
	</React.Fragment>
);

Banner.propTypes = {
	title: PropTypes.string.isRequired,
	raceName: PropTypes.string,
	race: PropTypes.object
};

Banner.defaultProps = {
	raceName: '',
	race: {}
};

export default Banner;
