import PropTypes from 'prop-types';
import React from 'react';
import Rider from './rider';
import {createClient} from 'contentful';
import request from 'superagent';
import styled from 'styled-components';
import tachyons from 'styled-components-tachyons';

const H2 = styled.h2`${tachyons}`;
const Header = styled.header`${tachyons}`;
const Div = styled.div`${tachyons}`;
const P = styled.p`${tachyons}`;
const TopRidersWrap = styled.div`${tachyons}`;

class topRiders extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			leaderboard: []
		};
	}

	setStateAsync(state) {
		return new Promise(resolve => {
			this.setState(state, resolve);
		});
	}

	async componentDidMount() {
		const leaderboardUrl = `https://dotwatcher.scrapey.xyz/api/pages`;

		let leaderboard = [];
		request
			.get(leaderboardUrl)
			.query({
				'access_token': process.env.SCRAPEY_API_KEY,
				'filter[order]': 'timestamp DESC',
				'filter[where][url]': `http://trackleaders.com/${this.props.trackleadersID}`,
				'filter[limit]': 1
			})
			.end((err, res) => {
				if (err) {
					return;
				}
				if (res.body.length === 0) {
					return;
				}
				let data = res.body[0].data.leaderboard.sort((a, b) => parseFloat(b.mile) - parseFloat(a.mile));
				data = data.slice(0, 10);

				leaderboard = data.map((item, index) => {
					return {
						sys: {
							id: index
						},
						fields: {
							name: item.name,
							distance: parseFloat(item.kilometre).toFixed(0)
						}
					};
				});

				this.setStateAsync({leaderboard});
			});
	}

	render() {
		return (
			<TopRidersWrap fl w_100 pr3 pr0_ns mb4>
				<Header>
					<H2 ttu tracked f5 fw6 mt0 pb1 bb bw1 b__light_gray measure_narrow>
						Leaderboard
					</H2>
				</Header>
				<Div measure_narrow>
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
	raceID: PropTypes.string,
	trackleadersID: PropTypes.string
};

topRiders.defaultProps = {
	raceID: '',
	trackleadersID: ''
};

export default topRiders;
