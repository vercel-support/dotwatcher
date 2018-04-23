import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import tachyons from 'styled-components-tachyons';
import DateTime from '../datetime';
import Image from '../image';
import {Link} from '../../routes';
import SocialButtons from '../social-buttons';
import slugify from '../../utils/slugify';

const Article = styled.article`${tachyons}`;
const Div = styled.div`${tachyons}`;
const A = styled.a`${tachyons}`;

const Short = ({data, id}) => {
	const host = typeof window !== 'undefined' ? window.location.host : '';
	const url = `${host}/post/${id}?slug=${slugify(data.title)}`;
	return (
		<Article bb bw1 f5 measure_wide mt4_l pb2 id={slugify(data.title)} className="cf">
			{ data.image ? <Image data={data.image.fields}/> : null }
			<Div lh_copy mv4>
				{data.title}
			</Div>
			<Link route="post" params={{type: 'post', id, slug: slugify(data.title)}} passHref prefetch>
				<A link near_black>
					<DateTime datetime={data.date}/>
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
