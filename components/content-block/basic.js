import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import shortcodes from 'remark-shortcodes';
import styled from 'styled-components';
import tachyons from 'styled-components-tachyons';
import Embed from '../embed';
import Placeholder from '../placeholder';
import Wrapper from '../shared/wrapper';
import widont from '../../utils/widont';

const Div = styled.div`
	p {
		margin: 0;
	}
	
	p + p {
		margin-top: 1rem;
	}

	blockquote {
		font-style: italic;
		border-left: .5rem solid var(--light-blue);
		padding-left: 1rem;
	}
${tachyons}`;
const H2 = styled.h2`${tachyons}`;
const Header = styled.header`${tachyons}`;
const Img = styled.img`${tachyons}`;

const Block = ({block}) => {
	let heading = null;
	if (block.heading) {
		heading = (
			<Header measure_wide>
				<H2 f3 f2_ns fw6 ma0 mb3 lh_title>{widont(block.heading)}</H2>
			</Header>
		)
	}
	return (
		<Div mh3 mh5_ns mb4 className="cf">
			{ heading }
			<Div measure lh_copy f4 f3_ns>
				<ReactMarkdown
					source={block.words}
					plugins={[shortcodes]}
					renderers={{shortcode: Embed}}
				/>
			</Div>
		</Div>
	);
};

Block.propTypes = {
	block: PropTypes.object.isRequired
};

export default Block;
