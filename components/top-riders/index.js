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

class topRiders extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			leaderboard: []
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
			accessToken: vars.accessToken
		});

		const contenfulQuery = {
			content_type: 'leaderboard', // eslint-disable-line camelcase
			'fields.race.sys.id': this.props.raceID
		};

		const response = await client.getEntries(contenfulQuery);
		const leaderboard = [];
		for (const item of response.items) {
			const entry = {
				sys: {
					id: item.sys.id
				},
				riders: item.fields.leaders
			};

			leaderboard.push(entry);
		}
		await this.setStateAsync({leaderboard});
	}

	render() {
		console.log(this.state.leaderboard);
		return (
			<Div>
				<Header pt4_l>
					<H2 pt3>
						Top riders
					</H2>
				</Header>
				<Div>
					{
						this.state.leaderboard.length ? this.state.leaderboard[0].riders.map(rider => (
							<Rider key={rider.sys.id} rider={rider.fields}/>
						)) : 'Loading...'
					}
				</Div>
			</Div>
		);
	}
}

topRiders.propTypes = {
	raceID: PropTypes.string.isRequired
};

export default topRiders;
