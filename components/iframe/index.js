import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tachyons from 'styled-components-tachyons';
import Placeholder from '../placeholder';
import GoogleMap from '../google-map';

const Map = styled.iframe`${tachyons}`;

class Iframe extends Component {
	constructor(props) {
		super(props);
	}

	shouldComponentUpdate() {
		return false
	}

	componentDidMount() {
		const iframe = ReactDOM.findDOMNode(this.refs.iframe);
		if (iframe) {
			iframe.addEventListener('load', this.props.onLoad);
		}
	}

	render() {
		const Container = styled.div`
			@media screen and (min-width: 64em) {
				height: ${this.props.raceID.indexOf('maprogress') !== -1 ? 'calc(100vh - 75px)' : '100vh'};
			}
		${tachyons}`;
		let iframe = <Placeholder raceID="No race found" w_100 h_100/>
		if (this.props.raceID && this.props.raceID.indexOf('maprogress') !== -1) {
			iframe = <GoogleMap raceID={this.props.raceID} />
		} else if (this.props.raceID && this.props.raceID.indexOf('http') !== -1) {
			iframe = <Map ref="iframe" id="trackleaders-iframe" w_100 h_100 ba bw0 src={`${this.props.raceID}`} frameborder="0" {...this.props.onLoad}/>
		} else if (this.props.raceID) {
			iframe = <Map ref="iframe" id="trackleaders-iframe" w_100 h_100 ba bw0 src={`https://trackleaders.com/${this.props.raceID}f.php`} frameborder="0" {...this.props.onLoad}/>
		}

		return (
			<Container bg_near_white>
				{ iframe }
			</Container>
		);
	}
}

Iframe.propTypes = {
	raceID: PropTypes.string
};

Iframe.defaultProps = {
	raceID: ''
};

export default Iframe;
