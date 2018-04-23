import React from 'react';
import PropTypes from 'prop-types';
import Long from './post-long';
import Short from './post-short';
import Quote from './post-quote';
import Embed from './post-embed';
import Photo from './post-photo';

const Post = ({data, id}) => {
	let post;
	if (data.format === 'Long') {
		post = <Long key={id} id={id} data={data}/>;
	} else if (data.format === 'Quote') {
		post = <Quote key={id} id={id} data={data}/>;
	} else if (data.format === 'Embed') {
		post = <Embed key={id} id={id} data={data}/>;
	} else if (data.format === 'Photo') {
		post = <Photo key={id} id={id} data={data}/>;
	} else {
		post = <Short key={id} id={id} data={data}/>;
	}
	return post;
};

Post.propTypes = {
	data: PropTypes.object.isRequired,
	id: PropTypes.string.isRequired
};

export default Post;
