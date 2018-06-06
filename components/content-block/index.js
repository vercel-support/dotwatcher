import React from 'react';
import PropTypes from 'prop-types';
import Homepage from './homepage';
import ImageRightLeft from './image-right-left';
import BannerWithSegments from './banner-with-segments';
import RacePromo from './race-promo';
import Box from './box';
import EmailSignup from './email-signup';
import IconLeft from './icon-left';

const ContentBlock = ({block, segments, race}) => {
	if (block.layout === 'Homepage') {
		return <Homepage block={block}/>;
	}
	if (block.layout === 'Banner with segments') {
		return <RacePromo block={block} race={race[0]} segments={segments}/>;
	}
	if (block.layout === 'Race promo') {
		return <RacePromo block={block} race={race[0]}/>;
	}
	if (block.layout === 'Box') {
		return <Box block={block}/>;
	}
	if (block.layout === 'Email signup') {
		return <EmailSignup block={block}/>;
	}
	if (block.layout === 'Icon left') {
		return <IconLeft block={block}/>;
	}
	return <ImageRightLeft block={block}/>;
};

ContentBlock.propTypes = {
	block: PropTypes.object.isRequired,
	race: PropTypes.array,
	segments: PropTypes.array
};

ContentBlock.defaultProps = {
	race: [],
	segments: []
};

export default ContentBlock;
