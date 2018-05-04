import React, {Component} from 'react';
import Head from 'next/head';
import moment from 'moment';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tachyons from 'styled-components-tachyons';

import Header from '../components/header';
import Page from '../components/shared/page';
import Wrapper from '../components/shared/wrapper';
import Placeholder from '../components/placeholder';
import RacePreview from '../components/race-preview';
import Footer from '../components/footer';
import {withCategories} from '../data/with-categories';

const Heading = styled.header`${tachyons}`;
const H1 = styled.h1`${tachyons}`;
const H2 = styled.h2`${tachyons}`;
const P = styled.p`${tachyons}`;
const Div = styled.div`${tachyons}`;
const RaceWrap = styled.div`
	@media (min-width: 64em) {
		margin-left: 16.666666667%;
	}
${tachyons}`;

class App extends Component {
	render() {
		return (
			<Page sans_serif near_black pa0 ma0>
				<Head>
					<title>🏔 Dotwatcher</title>
				</Head>
				<Header
					title="dotwatcher.cc"
				/>
				<Div mt3 mt6_l>
					<Div mh4_m mh6_l className="cf">
						<Wrapper w_100 w_50_ns ph3 className="cf">
							<Placeholder raceID="A nice picture" relative w_100 bg_light_gray/>
						</Wrapper>
						<Wrapper w_100 w_50_ns ph3 mv4 mv0_ns className="cf">
							<H2 f1 f_subheadline_l lh_title ma0 bt bw4 b__light_blue>Dotwatcher is a place on the internet</H2>
						</Wrapper>
						<Wrapper w_100 ph3 mv4 mv0_ns className="cf">
							<P f2 lh_copy measure_narrow center pl4 bl bw3 b__light_blue mb0>Dotwatcher exists to be the number one place to come and get the latest on unsupported long distance bike races.</P>
						</Wrapper>
					</Div>
					<RaceWrap fl ph3_l pb2 w_100 w_two_thirds_l center mt5_ns className="cf">
						<Heading fl w_100 mb4 ph3>
							<H1 f4 fw6 ttu tracked bg_light_gray pa1>Upcoming races</H1>
						</Heading>
						{
							this.props.races.map(race => {
								if (moment(race.data.raceEndDate).isAfter()) {
									return <RacePreview key={race.sys.id} id={race.sys.id} data={race.data}/>;
								}
							})
						}

						<Heading fl w_100 mv4 ph3>
							<H1 f4 fw6 mt4 ttu tracked bg_light_gray pa1>Past races</H1>
						</Heading>
						{
							this.props.races.slice(0).reverse().map(race => {
								if (moment(race.data.raceEndDate).isBefore()) {
									return <RacePreview key={race.sys.id} id={race.sys.id} data={race.data}/>;
								}
							})
						}
					</RaceWrap>
				</Div>
			<Footer/>
			</Page>
		);
	}
}

App.propTypes = {
	races: PropTypes.array
};

App.defaultProps = {
	races: []
};

export default withCategories(App);
