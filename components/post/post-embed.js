import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import tachyons from 'styled-components-tachyons';
import DateTime from '../datetime';
import Embed from '../embed';
import Image from '../image';
import {Link} from '../../routes';
import SocialButtons from '../social-buttons';
import slugify from '../../utils/slugify';

const Div = styled.div`${tachyons}`;
const A = styled.a`${tachyons}`;

const Short = ({data, id}) => {
	const host = typeof window !== 'undefined' ? window.location.host : '';
	const url = `${host}/post/${id}?slug=${slugify(data.title)}`;
	let embed;
	if (data.embed) {
		if (data.embed.includes('twitter') > 0) {
			embed = <Embed identifier="tweet" attributes={{id: data.embed.match(/https?:\/\/twitter\.com\/(?:#!\/)?(\w+)\/status(es)?\/(\d+)/)[3]}}/>;
		} else if (data.embed.includes('youtube') > 0) {
			embed = <Embed identifier="youtube" attributes={{id: data.embed.match(/^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w-]+\?v=|embed\/|v\/)?)([\w-]+)(\S+)?$/)[5]}}/>;
		} else if (data.embed.includes('instagram') > 0) {
			embed = <Embed identifier="instagram" attributes={{url: data.embed.split('?')[0]}}/>;
		} else if (data.embed.includes('iframe') > 0) {
			embed = <Embed identifier="iframe" attributes={{iframe: data.embed}}/>;
		} else {
			embed = null;
		}
	}
	return (
		<React.Fragment>
			{ data.image ? <Image data={data.image.fields}/> : null }
			{ embed }
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
