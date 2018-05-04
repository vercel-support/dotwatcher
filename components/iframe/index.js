import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tachyons from 'styled-components-tachyons';
import Placeholder from '../placeholder';

const Map = styled.iframe`${tachyons}`;
const Container = styled.div`
	height: 100vh;
	@media screen and (min-width: 60em) {
		height: calc(100vh - 75px);
		margin-top: 75px;
	}
${tachyons}`;

const Iframe = ({raceID}) => (
	<Container bg_near_white>
		{
			raceID ? <Map id="trackleaders-iframe" w_100 h_100 ba bw0 src={`https://trackleaders.com/${raceID}f.php`} frameborder="0"/> : <Placeholder raceID="No race found" w_100 h_100/>
		}
	</Container>
);

Iframe.propTypes = {
	raceID: PropTypes.string.isRequired
};

export default Iframe;
