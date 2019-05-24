import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tachyons from 'styled-components-tachyons';
import ResultsSummary from '../results-summary';
import ResultsContribute from '../results-contribute';
import ResultsFilter from './results-filter';

const Div = styled.div`${tachyons}`;
const Header = styled.header`${tachyons}`;
const H1 = styled.h1`${tachyons}`;
const Grid = styled.div`
	display: grid;
	grid-gap: var(--spacing-large);
${tachyons}`;

const ResultsIndex = ({ raceResultsByYear }) => {
	const raceNames = raceResultsByYear.map(result => result.Event)
	return (
		<Div mt3 mt4_l mh6_l>
			<Div>
				<Header ma3>
					<H1 ma0 f1 fw6>Browse race results</H1>
				</Header>
				<Div>
					<ResultsFilter events={raceNames} />
				</Div>
				<Grid mh3 pb4 bb bw1 b__light_gray>
					{
						raceResultsByYear.map((result, i) => <ResultsSummary event={result} key={i} />)
					}
				</Grid>
				<ResultsContribute />
			</Div>
		</Div>
	);
};

ResultsIndex.propTypes = {
	raceResultsByYear: PropTypes.array
};

ResultsIndex.defaultProps = {
	raceResultsByYear: []
};

export default ResultsIndex;
