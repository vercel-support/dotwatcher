import { Link, Router } from '../../routes'
import PropTypes from 'prop-types';
import React from 'react';
import TimeAgo from 'react-timeago';
import styled from 'styled-components';
import tachyons from 'styled-components-tachyons';
import Event from './event';

const Article = styled.article`${tachyons}`;
const H2 = styled.h2`${tachyons}`;
const Header = styled.header`${tachyons}`;
const Div = styled.div`${tachyons}`;
const List = styled.ul`${tachyons}`;
const StyledTimeAgo = styled(TimeAgo)`
	display: inline-block;
	margin-bottom: var(--spacing-small);
	font-size: 1rem;
	font-style: italic;
`;

const keyEvents = ({posts}) => {
	return (
		<Div>
			<Header pt4>
				<H2 pt3>
					Key moments
				</H2>
			</Header>
			<List list="true" pa0>
			{
				posts.filter(post => post.data.keyEvent === true)
				.map(post => (
					<Event key={post.sys.id} data={post.data} id={post.sys.id}/>
				))
			}
			</List>
		</Div>
	);
};

keyEvents.propTypes = {
	posts: PropTypes.array.isRequired
};

export default keyEvents;
