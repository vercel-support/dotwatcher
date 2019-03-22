'use strict'

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tachyons from 'styled-components-tachyons';

import TwitterLogo from "./icons/twitter";
import InstagramLogo from "./icons/instagram";
import FacebookLogo from "./icons/facebook";

const SocialIcons = ({size, colour}) => {
	const A = styled.a`
		width: ${size}rem;
		height: ${size}rem;
		color: var(--${colour});
		margin-right: ${size}rem;
	${tachyons}`
	return (
		<React.Fragment>
			<A link grow hover_blue dib v_btm href="https://www.instagram.com/dotwatcher.cc/" title="Follow us on instagram">
				<InstagramLogo/>
			</A>
			<A link grow hover_blue dib v_btm href="https://twitter.com/dotwatcher" title="Follow us on twitter">
				<TwitterLogo/>
			</A>
			<A link grow hover_blue dib v_btm href="https://www.facebook.com/Dotwatcher-589592644746030/" title="Follow us on facebook">
				<FacebookLogo/>
			</A>
		</React.Fragment>
	);
}

SocialIcons.propTypes = {
	size: PropTypes.string.isRequired,
	colour: PropTypes.string.isRequired
}

export default SocialIcons;
