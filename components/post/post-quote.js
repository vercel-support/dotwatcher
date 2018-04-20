import PropTypes from 'prop-types';
import React from 'react';
import TimeAgo from 'react-timeago';
import ReactMarkdown from 'react-markdown-with-shortcodes';
import shortcodes from 'remark-shortcodes';
import styled from 'styled-components';
import tachyons from 'styled-components-tachyons';
import Embed from '../embed';
import Image from '../image';
import {Link} from '../../routes';
import SocialButtons from '../social-buttons';
import slugify from '../../utils/slugify';

const Article = styled.article`${tachyons}`;
const P = styled.p`${tachyons}`;
const Cite = styled.cite`${tachyons}`;
const Blockquote = styled.blockquote`${tachyons}`;
const A = styled.a`${tachyons}`;
const StyledTimeAgo = styled(TimeAgo)`
	float: left;
	width: 33%;
	font-size: .875rem;
	padding: var(--spacing-small) 0;
	text-decoration: underline;
`;

const Short = ({data, id}) => {
	const host = typeof window !== 'undefined' ? window.location.host : '';
	const url = `${host}/post/${id}?slug=${slugify(data.title)}`;
	let body;
	if (data.body) {
		body = (
			<ReactMarkdown
				source={data.body}
				plugins={[shortcodes]}
				renderers={{shortcode: Embed}}
			/>
		);
	}
	return (
		<Article bb bw1 f5 measure_wide mt4_l pb2 id={slugify(data.title)} className="cf">
			{ data.image ? <Image data={data.image.fields}/> : null }
			<Blockquote ma0 mt4 pl3 bl bw3 b__near_black>
				<P lh_title f3 fw6 ma0 pa0>{data.title}</P>
				<Cite lh_copy ma0 pa0>{body}</Cite>
			</Blockquote>
			<Link route="post" params={{type: 'post', id, slug: slugify(data.title)}} passHref prefetch>
				<A link near_black>
					<StyledTimeAgo date={data.date}>
						{data.date}
					</StyledTimeAgo>
				</A>
			</Link>
			<SocialButtons url={url}/>
		</Article>
	);
};

Short.propTypes = {
	data: PropTypes.object.isRequired,
	id: PropTypes.string.isRequired
};

export default Short;
