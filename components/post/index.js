import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tachyons from 'styled-components-tachyons';

const H1 = styled.h1`
	${tachyons}
`;

const P = styled.p`
	${tachyons}
`;

const Post = ({title, body}) => (
	<div>
		<H1 f2 lh_title measure_narrow>{title}</H1>
		<P lh_copy measure_wide>{body}</P>
	</div>
);

Post.propTypes = {
	title: PropTypes.string.isRequired,
	body: PropTypes.string.isRequired
};

export default Post;
