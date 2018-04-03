import Image from '../image';
import Link from 'next/link';
import PropTypes from 'prop-types';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import SocialButtons from '../social-buttons';
import TimeAgo from 'react-timeago';
import Tweet from '../tweet';
import shortcodes from 'remark-shortcodes';
import styled from 'styled-components';
import tachyons from 'styled-components-tachyons';

const Article = styled.article`${tachyons}`;
const H1 = styled.h1`${tachyons}`;
const Div = styled.div`${tachyons}`;
const StyledTimeAgo = styled(TimeAgo)`
	display: inline-block;
	margin-bottom: var(--spacing-small);
	font-size: 1rem;
	font-style: italic;
`;

const Post = ({data, id}) => {
	return (
		<Article bb bw1 f4 measure_wide mt4>
			{ data.image ? <Image data={data.image.fields}/> : null }
			<H1 f2 lh_title><Link href={'post?id=' + id} as={'/post/' + id}><a>{data.title}</a></Link></H1>
			<Div lh_copy>
				<ReactMarkdown
					source={data.body}
					plugins={[shortcodes]}
					renderers={{shortcode: Tweet}}
				/>
			</Div>
			<SocialButtons />
			<StyledTimeAgo date={data.date}>
				{data.date}
			</StyledTimeAgo>
		</Article>
	);
};

Post.propTypes = {
	data: PropTypes.object.isRequired
};

export default Post;
