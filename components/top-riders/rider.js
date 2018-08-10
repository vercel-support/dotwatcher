import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import tachyons from 'styled-components-tachyons';

const Wrap = styled.dl`${tachyons}`;
const RiderName = styled.dt`${tachyons}`;
const Name = styled.span`${tachyons}`;
const RiderStat = styled.dt`${tachyons}`;

const Rider = ({rider, numbered, position}) => {
	return (
		<Wrap f6 mt0 mb2 lh_copy className="cf">
			<RiderName fl f6>
				{ numbered ? `${position}. ` : null }
				<Name fw6>{rider.name}</Name>
			</RiderName>
			{
				rider.distance ? <RiderStat fr f6 gray>{rider.distance}km</RiderStat> : null
			}
		</Wrap>
	);
};

Rider.propTypes = {
	rider: PropTypes.object.isRequired,
	numbered: PropTypes.bool,
	position: PropTypes.number
};

export default Rider;

