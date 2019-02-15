import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tachyons from 'styled-components-tachyons';
import { Link } from '../../routes';
import slugify from '../../utils/slugify';
import ResultsFilter from '../results-filter';

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

class ResultsTable extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			activeFilter: this.props.activeClass
		};

		this.setFilter = this.setFilter.bind(this);
	}

	setFilter(filter) {
		this.setState({
			activeFilter: filter
		});
	}

	render() {
		const ResultsRow = styled.tr`
			&:nth-child(even) {
				background-color: var(--near-white);
			}
			&[id="${this.props.focus}"],
			&:hover,
			&:target {
				background-color: var(--lightest-blue);
			}
		${tachyons}`;
		const ResultsCell = styled.td`
			line-height: 1.5;
			font-variant-numeric: tabular-nums;
			padding: var(--spacing-extra-small);

			@media screen and (min-width:64em){
				padding: var(--spacing-small) var(--spacing-extra-small);
			}

			&.rank {
				text-align: ${this.props.type === 'profile' ? 'center' : 'right'};
			}

			&.race-name {
				font-weight: ${this.props.type === 'race' ? '400' : '600'}
			}

			&.rider-name {
				font-weight: ${this.props.type === 'profile' ? '400' : '600'}
			}
		${tachyons}`;


		if (this.props.results.length < 1) {
			return (
			<Div fl w_100 ph3>
				<p>No results found for this race</p>
			</Div>
			)
		}

		const withCapNo = this.props.results[0]['Cap/Bib'];

		return (
			<Div ph3>
				{ this.props.type !== 'profile' && this.props.racerClasses.length > 1 ? <ResultsFilter racerClasses={this.props.racerClasses} setFilter={this.setFilter.bind(this)} activeFilter={this.state.activeFilter} /> : null }
				<Results w_100 f6 f5_l>
					<thead>
						<HeadRow bb bw1>
							{
								this.props.type === 'profile' ? <ResultsHeadCell>Race</ResultsHeadCell> : null
							}
							{
								this.props.type === 'profile' ? <ResultsHeadCell>Year</ResultsHeadCell> : null
							}
							<ResultsHeadCell>Rank</ResultsHeadCell>
							<ResultsHeadCell>Rider</ResultsHeadCell>
							{
								withCapNo ? <ResultsHeadCell dn dtc_ns>Cap/Bib</ResultsHeadCell> : null
							}
							<ResultsHeadCell dn dtc_ns>Category</ResultsHeadCell>
							<ResultsHeadCell>Result</ResultsHeadCell>
							<ResultsHeadCell dn dtc_ns>Bike</ResultsHeadCell>
							<ResultsHeadCell tr><abbr title="Finish Time in days, hours and minutes">Finish Time</abbr></ResultsHeadCell>
						</HeadRow>
					</thead>
					<tbody>
						{
							this.props.results.map(result => {
								if (this.props.type !== 'profile' && this.state.activeFilter !== result['Class']) {
									return null
								}
								const id = this.props.type === 'profile' ? `${slugify(result['Event'])}-${slugify(result['Year'].toString())}` : slugify(result['Rider'])
								return (
									<ResultsRow key={result['rowid']} id={id}>
										{
											this.props.type === 'profile' ? <ResultsCell className="race-name"><Link route="results" params={{ type: 'results', race: result['Event'], year: result['Year'], 'focus': slugify(result['Rider']), 'activeClass': result['Class'] }} passHref><A link near_black hover_blue underline>{result['Event']}</A></Link></ResultsCell> : null
										}
										{
											this.props.type === 'profile' ? <ResultsCell>{result['Year']}</ResultsCell> : null
										}
										<ResultsCell pa0 pr2 className="rank">{ result['Position'] }</ResultsCell>
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
											{result['Result']}
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
	}
}

ResultsTable.propTypes = {
	results: PropTypes.array,
	racerClasses: PropTypes.array,
	type: PropTypes.string,
	focus: PropTypes.string
};

ResultsTable.defaultProps = {
	results: [],
	racerClasses: [],
	type: 'race',
	focus: ''
};

export default ResultsTable;
