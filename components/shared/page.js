import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tachyons from 'styled-components-tachyons';
import {initGA, logPageView} from '../../utils/analytics';

const Div = styled.div`${tachyons}`;

class Page extends Component {
	componentDidMount() {
		if (!window.GA_INITIALIZED) {
			initGA();
			window.GA_INITIALIZED = true;
		}
		logPageView();
	}

	render() {
		return (
			<Div sans_serif near_black pa0 ma0 className="cf">
				{this.props.children}
			</Div>
		);
	}
}

Page.propTypes = {
	children: PropTypes.node
};

Page.defaultProps = {
	children: ''
};

export default Page;
