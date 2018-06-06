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
${tachyons}`;
const H2 = styled.h2`${tachyons}`;
const Img = styled.img`${tachyons}`;
const ImageWrap = styled.div`${tachyons}`;
const WordsWrap = styled.div`${tachyons}`;

const Block = ({block}) => {
	return (
		<Wrapper fl mh3 mh6_ns mb4 className="with-divider cf">
			<WordsWrap fl_ns pr3 w_100 w_75_m w_50_l>
				<ImageWrap fl w_20>
					{ block.image ? <Img mw_100 src={block.image.fields.file.url} alt={block.image.fields.description}/> : <Placeholder w_100 h_100 pv6 bg_light_gray/> }
				</ImageWrap>
				<H2 f3 ma0 mb4>{widont(block.heading)}</H2>
			</WordsWrap>
			<WordsWrap fl_ns pl3 w_100 w_75_m w_50_l>
				<Div fl measure lh_copy f4 mb4>
					<ReactMarkdown
						source={block.words}
						plugins={[shortcodes]}
						renderers={{shortcode: Embed}}
					/>
				</Div>
			</WordsWrap>
		</Wrapper>
	);
};

Block.propTypes = {
	block: PropTypes.object.isRequired
};

export default Block;
