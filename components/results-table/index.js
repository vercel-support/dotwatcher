import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tachyons from 'styled-components-tachyons';
import { Link } from '../../routes';

const Div = styled.div`${tachyons}`;
const A = styled.a`${tachyons}`;
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

const ResultsTable = ({type, results}) => {
	const ResultsCell = styled.td`
		line-height: 1.5;
		font-variant-numeric: tabular-nums;
		padding: var(--spacing-extra-small);

		@media screen and (min-width:64em){
			padding: var(--spacing-small) var(--spacing-extra-small);
		}

		&.rank {
			text-align: ${type === 'profile' ? 'center' : 'right'};
		}

		&.race-name {
			font-weight: ${type === 'race' ? '400' : '600'}
		}

		&.rider-name {
			font-weight: ${type === 'profile' ? '400' : '600'}
		}
	${tachyons}`;


	if (results.length < 1) {
		return (
		<Div fl w_100 ph3>
			<p>No results found for this race</p>
		</Div>
		)
	}

	const withCapNo = results[0]['Cap/Bib'];

	return (
		<Div ph3>
			<Results w_100 f6 f5_l>
				<thead>
					<HeadRow bb bw1>
						{
							type === 'profile' ? <ResultsHeadCell>Race</ResultsHeadCell> : null
						}
						{
							type === 'profile' ? <ResultsHeadCell>Year</ResultsHeadCell> : null
						}
						{
							type !== 'profile' ? <ResultsHeadCell>Rank</ResultsHeadCell> : null
						}
						<ResultsHeadCell>Rider</ResultsHeadCell>
						{
							withCapNo ? <ResultsHeadCell dn dtc_ns>Cap/Bib</ResultsHeadCell> : null
						}
						<ResultsHeadCell dn dtc_ns>Class</ResultsHeadCell>
						<ResultsHeadCell>Result</ResultsHeadCell>
						<ResultsHeadCell dn dtc_ns>Bike</ResultsHeadCell>
						<ResultsHeadCell tr><abbr title="Finish Time in days, hours and minutes">Finish Time</abbr></ResultsHeadCell>
					</HeadRow>
				</thead>
				<tbody>
					{
						results.map((result, i) => {
							return (
								<ResultsRow key={result['rowid']}>
									{
										type === 'profile' ? <ResultsCell className="race-name"><Link route="results" params={{ type: 'results', race: result['Event'], year: result['Year'] }} passHref><A link near_black hover_blue underline>{result['Event']}</A></Link></ResultsCell> : null
									}
									{
										type === 'profile' ? <ResultsCell>{result['Year']}</ResultsCell> : null
									}
									{
										type !== 'profile' ? <ResultsCell pa0 pr2 className="rank">{ i+1 }</ResultsCell> : null
									}
									<ResultsCell className="rider-name">
										<Link route="profile" params={{ type: 'profile', name: result['Rider'] }} passHref>
											<A link near_black hover_blue underline>
												{result['Rider']}
											</A>
										</Link>
									</ResultsCell>
									{ withCapNo ? <ResultsCell dn dtc_ns tc>{ result['Cap/Bib'] }</ResultsCell> : null }
									<ResultsCell dn dtc_ns>
										{result['Class']}
									</ResultsCell>
									<ResultsCell>
										{result['Result'].replace('(within time limit)','')}
									</ResultsCell>
									<ResultsCell dn dtc_ns>
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
										}
										{
											result['Minutes'] ? 'm' : '--'
										}
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
