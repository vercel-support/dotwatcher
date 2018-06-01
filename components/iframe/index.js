import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tachyons from 'styled-components-tachyons';
import Placeholder from '../placeholder';

const Map = styled.iframe`${tachyons}`;

const Iframe = ({raceID, offset}) => {
	const Container = styled.div`
		height: 100vh;
		@media screen and (min-width: 64em) {
			height: ${offset ? 'calc(100vh - 75px)' : '100vh'};
		}
	${tachyons}`;
	return (
		<Container bg_near_white>
			{
				raceID ? <Map id="trackleaders-iframe" w_100 h_100 ba bw0 src={`https://trackleaders.com/${raceID}f.php`} frameborder="0"/> : <Placeholder raceID="No race found" w_100 h_100/>
			}
		</Container>
		)
}

Iframe.propTypes = {
	raceID: PropTypes.string,
	offset: PropTypes.bool
};

Iframe.defaultProps = {
	raceID: '',
	offset: false
}

export default Iframe;
