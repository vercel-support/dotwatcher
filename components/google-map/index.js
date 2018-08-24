import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { withScriptjs, withGoogleMap, GoogleMap, KmlLayer } from 'react-google-maps'

const MapWithAKmlLayer = ({raceID}) => {
	const raceSlug = raceID.replace(/(^\w+:|^)\/\//, '').split('.')[0]
	const MyMapComponent = withScriptjs(withGoogleMap((props) =>
		<GoogleMap
			defaultZoom={10}
			defaultCenter={{ lat: 44.4722865242511, lng: 6.188003132119775 }}
			mapTypeId={'terrain'}
		>
			<KmlLayer
				url={`https://app.maprogress.com/event/download/kml/${raceSlug}`}
			/>
		</GoogleMap>
	))
	return (
		<MyMapComponent
			isMarkerShown
			googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_MAPS_API_KEY}`}
			loadingElement={<div style={{ height: `100%` }} />}
			containerElement={<div style={{ height: `100vh` }} />}
			mapElement={<div style={{ height: `100%` }} />}
		/>
	)
};

MapWithAKmlLayer.propTypes = {
	raceID: PropTypes.string
};


export default MapWithAKmlLayer;
