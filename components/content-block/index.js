import React from 'react';
import PropTypes from 'prop-types';
import Homepage from './homepage';
import ImageRightLeft from './image-right-left';
import RacePromo from './race-promo';
import Box from './box';
import EmailSignup from './email-signup';

const ContentBlock = ({block, race}) => {
	if (block.layout === 'Homepage') {
		return <Homepage block={block}/>;
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
	return <ImageRightLeft block={block}/>;
};

ContentBlock.propTypes = {
	block: PropTypes.object.isRequired,
	race: PropTypes.array
};

ContentBlock.defaultProps = {
	race: []
};

export default ContentBlock;
