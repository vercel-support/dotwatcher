import PropTypes from 'prop-types';
import React from 'react';
import ReactMarkdown from 'react-markdown-with-shortcodes';
import shortcodes from 'remark-shortcodes';
import styled from 'styled-components';
import tachyons from 'styled-components-tachyons';
import DateTime from '../datetime';
import Embed from '../embed';
import Image from '../image';
import {Link} from '../../routes';
import slugify from '../../utils/slugify';
import SocialButtons from '../social-buttons';

const H1 = styled.h1`${tachyons}`;
const Div = styled.div`
	iframe {
		max-width: 100%;
	}
	img {
		max-width: 100%;
	}
	a:link {
		color: var(--blue)
	}
	a:hover {
		color: var(--light-blue)
	}
${tachyons}`;
const A = styled.a`${tachyons}`;

const Long = ({data, id}) => {
	const host = typeof window !== 'undefined' ? window.location.host : '';
	const url = `${host}/post/${id}?slug=${slugify(data.title)}`;

	return (
		<React.Fragment>
			{ data.image ? <Image data={data.image.fields}/> : null }
			<H1 f2 lh_title>
				<Link route="post" params={{type: 'post', id, slug: slugify(data.title)}} passHref prefetch>
					<A link dim near_black underline>{data.title}</A>
				</Link>
			</H1>
			<Div lh_copy pb3>
				<ReactMarkdown
					source={data.body}
					plugins={[shortcodes]}
					escapeHtml={false}
					renderers={{shortcode: Embed}}
				/>
			</Div>
			<Link route="post" params={{type: 'post', id, slug: slugify(data.title)}} passHref prefetch>
				<A link near_black>
					<DateTime datetime={data.date}/>
				</A>
			</Link>
			<SocialButtons url={url}/>
		</React.Fragment>
	);
};
Long.propTypes = {
	data: PropTypes.object.isRequired,
	id: PropTypes.string.isRequired
};

export default Long;
