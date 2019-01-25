import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tachyons from 'styled-components-tachyons';
import ResultsSummary from '../results-summary';
import ResultsContribute from '../results-contribute';

const Div = styled.div`${tachyons}`;
const Header = styled.header`${tachyons}`;
const H1 = styled.h1`${tachyons}`;
const H2 = styled.h2`${tachyons}`;
const Grid = styled.div`
	display: grid;
	grid-gap: var(--spacing-large);
	grid-template-columns: repeat(auto-fill, minmax(320px, 1fr) );
${tachyons}`;
const RaceWrap = styled.div`
	@media screen and (min-width: 64em) {
		margin-left: 10%;
	}
${tachyons}`;

const ResultsIndex = ({ raceResultsByYear }) => {
	return (
		<React.Fragment>
			<RaceWrap fl ph3_ns pb2 w_100 w_80_l center mt4_ns className="cf">
				<Header mv3>
					<H1 ma0 f2 fw6>Browse race results</H1>
				</Header>
				<Grid pb4 bb bw1 b__light_gray>
					{
						raceResultsByYear.map((result, i) => <ResultsSummary event={result} key={i} />)
					}
				</Grid>
				<ResultsContribute />
			</RaceWrap>
		</React.Fragment>
	);
};

ResultsIndex.propTypes = {
	raceResultsByYear: PropTypes.array
};

ResultsIndex.defaultProps = {
	raceResultsByYear: []
};

export default ResultsIndex;
