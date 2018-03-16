import React from 'react';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tachyons from 'styled-components-tachyons';

const Article = styled.article`
	${tachyons}
`;

const H1 = styled.h1`
	${tachyons}
`;

const Div = styled.div`
	${tachyons}
`;

const Post = ({title, body}) => (
	<Article bb bw1 measure_wide>
		<H1 f2 lh_title>{title}</H1>
		<Div lh_copy>
			<ReactMarkdown source={body}/>
		</Div>
	</Article>
);

Post.propTypes = {
	title: PropTypes.string.isRequired,
	body: PropTypes.string.isRequired
};

export default Post;
