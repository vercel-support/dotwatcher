import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tachyons from 'styled-components-tachyons';

const Div = styled.div`${tachyons}`;
const Results = styled.table`
    border:none;
    border-collapse:collapse;
    border-spacing:0;
${tachyons}`;
const ResultsHeadCell = styled.th`
	text-align: left;
	line-height: 1.5;
	padding: var(--spacing-extra-small);
	text-transform: uppercase;
${tachyons}`;
const HeadRow = styled.tr`${tachyons}`;
const ResultsRow = styled.tr`
	&:nth-child(even) {
		background-color: var(--near-white);
	}
	&:hover {
		background-color: var(--lightest-blue);
	}
${tachyons}`;
const ResultsCell = styled.td`
	line-height: 1.5;
	font-variant-numeric: tabular-nums;
	padding: var(--spacing-extra-small);
${tachyons}`;

const ResultsTable = ({type, results}) => {
	if (results.length < 1) {
		return (
		<Div fl w_100 ph3>
			<p>No results found for this race</p>
		</Div>
		)
	}

	const withCapNo = results[0]['Cap/Bib'];

	return (
		<Div fl w_100 ph3>
			<Results w_100 f6 f5_l>
				<thead>
					<HeadRow bb bw1>
						{ <ResultsHeadCell>Rank</ResultsHeadCell>}
						<ResultsHeadCell>Rider</ResultsHeadCell>
						{
							withCapNo ? <ResultsHeadCell>Cap/Bib</ResultsHeadCell> : null
						}
						<ResultsHeadCell>Class</ResultsHeadCell>
						<ResultsHeadCell>Result</ResultsHeadCell>
						<ResultsHeadCell>Bike</ResultsHeadCell>
						<ResultsHeadCell tr><abbr title="Finish Time in days, hours and minutes">Finish Time</abbr></ResultsHeadCell>
					</HeadRow>
				</thead>
				<tbody>
					{
						results.map((result, i) => {
							return (
								<ResultsRow key={result['rowid']}>
									<ResultsCell tr pa0 pr2>
										{ i+1 }
									</ResultsCell>
									<ResultsCell fw6>
										{result['Rider']}
									</ResultsCell>
									{ withCapNo ? <ResultsCell>{ result['Cap/Bib'] }</ResultsCell> : null }
									<ResultsCell>
										{result['Class']}
									</ResultsCell>
									<ResultsCell>
										{result['Result']}
									</ResultsCell>
									<ResultsCell>
										{result['Bike']}
									</ResultsCell>
									<ResultsCell tr title="Finish Time in days, hours and minutes">
										{
											result['Days'] ? result['Days'] + 'd:' : '--'
										}
										{
											parseInt(result['Hours']) < 10 ? '0' + result['Hours'] : result['Hours']
										}
										{ result['Hours'] ? 'h:' : '--' }
										{
											parseInt(result['Minutes']) < 10 ? '0' + result['Minutes'] : result['Minutes']
										}m
									</ResultsCell>
								</ResultsRow>
							)
						})
					}
				</tbody>
			</Results>
		</Div>
	);
};

ResultsTable.propTypes = {
	results: PropTypes.array,
	type: PropTypes.string
};

ResultsTable.defaultProps = {
	results: [],
	type: 'race'
};

export default ResultsTable;
