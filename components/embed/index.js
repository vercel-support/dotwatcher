import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Instagram from 'react-instagram-embed';
import Placeholder from '../placeholder';

class Embed extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inBrowser: false
		};
	}

	componentDidMount() {
		this.setState({inBrowser: true});
	}

	render() {
		let embed = null;
		if (this.state.inBrowser && this.props.identifier === 'tweet') {
			const {TwitterTweetEmbed} = require('react-twitter-embed');
			embed = <TwitterTweetEmbed tweetId={this.props.attributes.id}/>;
		} else if (this.state.inBrowser && this.props.identifier === 'instagram') {
			embed = <Instagram url={this.props.attributes.url}/>;
		} else if (this.state.inBrowser && this.props.identifier === 'youtube') {
			embed = <iframe width="560" height="315" style={{maxWidth: '100%'}} src={`https://www.youtube.com/embed/${this.props.attributes.id}`} frameBorder="0" allowFullScreen/>;
		} else if (this.state.inBrowser && this.props.identifier === 'iframe') {
			embed = this.props.attributes.iframe;
		} else {
			embed = <Placeholder/>;
		}

		return embed;
	}
}

Embed.propTypes = {
	identifier: PropTypes.string.isRequired,
	attributes: PropTypes.object
};

Embed.defaultProps = {
	attributes: {}
};

export default Embed;
