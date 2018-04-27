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
import SocialButtons from '../social-buttons';
import slugify from '../../utils/slugify';

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
const Short = ({data, id}) => {
	const host = typeof window !== 'undefined' ? window.location.host : '';
	const url = `${host}/post/${id}?slug=${slugify(data.title)}`;
	let body;
	if (data.body) {
		body = (
			<Div lh_copy>
				<ReactMarkdown
					source={data.body}
					plugins={[shortcodes]}
					escapeHtml={false}
					renderers={{shortcode: Embed}}
				/>
			</Div>
		);
	}
	return (
		<React.Fragment>
			{ data.image ? <Image data={data.image.fields}/> : null }
			{ body ? body : null }
			<Div lh_copy mv4>
				{data.title}
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

Short.propTypes = {
	data: PropTypes.object.isRequired,
	id: PropTypes.string.isRequired
};

export default Short;
