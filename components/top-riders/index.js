import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tachyons from 'styled-components-tachyons';
import {createClient} from 'contentful';
import vars from '../../data/api-vars';

import Rider from './rider';

const H2 = styled.h2`${tachyons}`;
const Header = styled.header`${tachyons}`;
const Div = styled.div`${tachyons}`;
const P = styled.p`${tachyons}`;
const TopRidersWrap = styled.div`${tachyons}`;

class topRiders extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			leaderboard: {}
		};
	}

	setStateAsync(state) {
		return new Promise((resolve) => {
			this.setState(state, resolve)
		});
	}

	async componentDidMount() {
		this.state.leaderboard = []
		const client = createClient({
			space: vars.space,
			accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
		});

		const contenfulQuery = {
			content_type: 'leaderboard', // eslint-disable-line camelcase
			'fields.race.sys.id': this.props.raceID
		};

		const response = await client.getEntries(contenfulQuery);
		let leaderboard = {};
		for (const item of response.items) {
			if (item.fields.leaders) {
				leaderboard = item.fields.leaders;
			} else {
				leaderboard = [
					{
						sys: {
							id: 0
						},
						fields: {
							name: 'No report yet'
						}
					}
				]
			}
		}
		await this.setStateAsync({leaderboard});
	}

	render() {
		return (
			<TopRidersWrap fl w_50 w_100_ns pr3 pr0_ns mb4>
				<Header>
					<H2 ttu tracked f5 mt0 pb1 bb bw1 b__light_gray measure_narrow>
						Top riders
					</H2>
				</Header>
				<Div>
					{
						Object.keys(this.state.leaderboard).length !== 0 ? this.state.leaderboard.map(rider => (
							<Rider key={rider.sys.id} rider={rider.fields}/>
						)) : <P f6 b>Loading...</P>
					}
				</Div>
			</TopRidersWrap>
		);
	}
}

topRiders.propTypes = {
	raceID: PropTypes.string
};

topRiders.defaultProp = {
	raceID: ''
};

export default topRiders;
