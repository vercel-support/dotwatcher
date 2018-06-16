import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tachyons from 'styled-components-tachyons';

const Wrap = styled.dl`${tachyons}`;
const RiderName = styled.dt`${tachyons}`;
const RiderStat = styled.dt`${tachyons}`;

const Rider = ({rider}) => {
	return (
		<Wrap f6 mt0 mb2 lh_copy className="cf">
			<RiderName fl f6 fw6>{rider.name}</RiderName>
			{
				rider.distance ? <RiderStat fr f6 gray>{rider.distance}km</RiderStat> : null
			}
		</Wrap>
	);
};

Rider.propTypes = {
	rider: PropTypes.object.isRequired
};

export default Rider;

