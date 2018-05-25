import PropTypes from 'prop-types';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import shortcodes from 'remark-shortcodes';
import styled from 'styled-components';
import tachyons from 'styled-components-tachyons';
import Embed from '../embed';
import Image from '../image';
import {Link} from '../../routes';
import slugify from '../../utils/slugify';
import widont from '../../utils/widont';

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
			<H1 f2 lh_title mt0>
				<Link route="post" params={{type: 'post', id, slug: slugify(data.title)}} passHref prefetch>
					<A link near_black hover_blue>{widont(data.title)}</A>
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
		</React.Fragment>
	);
};
Long.propTypes = {
	data: PropTypes.object.isRequired,
	id: PropTypes.string.isRequired
};

export default Long;
