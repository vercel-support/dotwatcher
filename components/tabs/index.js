import React, {Component} from 'react';
import styled from 'styled-components';
import tachyons from 'styled-components-tachyons';

const Tabs = styled.ul`
	position: sticky;
	top: 0;
	list-style-type: none;
${tachyons}`;
const Tab = styled.li`${tachyons}`;

const TabbedNav = ({setActiveTabFeed, setActiveTabCommunity, activeTab, count}) => {

const FeedButton = styled.a`
	background-color: var(--${activeTab === 'feed' ? 'light-gray' : 'white' });
${tachyons}`;
const CommunityButton = styled.a`
	background-color: var(--${activeTab === 'community' ? 'light-gray' : 'white' });
${tachyons}`;
const Count = styled.span`
	min-width: 1rem;
	border: 1px solid var(--light-blue);
	margin: -1px 0;
	padding: ${count < 10 ? '0' : '0 .25rem'};
	border-radius: ${count < 10 ? '100%' : '9999px'};
	box-sizing: content-box!important;
${tachyons}`;

	return (
		<Tabs pa0 bb bw1 bg_white b__light_gray>
			<Tab dib>
				<FeedButton onClick={setActiveTabFeed} db ttu tracked fw5 f6 pa2 mr3 hover_bg_near_white>
					Feed
				</FeedButton>
			</Tab>
			<Tab dib>
				<CommunityButton onClick={setActiveTabCommunity} db ttu tracked fw5 f6 pa2 hover_bg_near_white>
					Chat <Count dib bg_light_blue h1 tc f6 fw4 white>{count}</Count>
				</CommunityButton>
			</Tab>
		</Tabs>
	)
}

export default TabbedNav
