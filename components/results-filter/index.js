import React from 'react';
import styled from 'styled-components';
import tachyons from 'styled-components-tachyons';
import PropTypes from 'prop-types';

const Form = styled.form`${tachyons}`;
const Div = styled.div`
	padding-left: 1.5rem;
${tachyons}`;
const Input = styled.input`
	width: 1.5rem;
	height: 1.5rem;

	&:checked + label:after {
		opacity: 1;
	}
${tachyons}`;
const Label = styled.label`
	&:before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 1.5rem;
		height: 1.5rem;
		border: 2px solid var(--near-black);
		border-radius: 50%;
		box-sizing: border-box;
	}

	&:hover:before {
		background-color: var(--near-white);
	}

	&:after {
		content: '';
		position: absolute;
		top: .5rem;
		left: .5rem;
		width: 0;
		height: 0;
		border: .25rem solid var(--near-black);
		border-radius: 100%;
		opacity: 0;
	}
${tachyons}`;
const H3 = styled.h3`${tachyons}`;
const Fieldset = styled.fieldset`${tachyons}`;
const Legend = styled.legend`${tachyons}`;

class ResultsFilter extends React.Component {
	constructor(props) {
		super(props);
		this.onSelectChange = this.onSelectChange.bind(this);
	}

	onSelectChange(event) {
		this.props.setFilter(event.target.value)
	}

	render() {
		return (
			<Form mb3>
				<Fieldset bn ma0 pa0 aria-describedby="filter-title">
					<H3 id="filter-title" dib_ns f6 ttu tracked ma0 mr3 mb3>Filter by class:</H3>
					{
						this.props.racerClasses.map(racerClass => (
							<Div dib mr4 relative key={`wrap-filter-${racerClass}`}>
								{
									racerClass === this.props.activeFilter ? <Input o_0 absolute top_0 left_0 type="radio" checked name="filter" id={`filter-${racerClass}`} value={racerClass} onChange={this.onSelectChange.bind(this)}/> : <Input o_0 absolute top_0 left_0 type="radio" name="filter" id={`filter-${racerClass}`} value={racerClass} onChange={this.onSelectChange.bind(this)}/>
								}
								<Label f5 fw6 lh-copy dib pl2 pv1 htmlFor={`filter-${racerClass}`}>{racerClass}</Label>
							</Div>
						))
					}
				</Fieldset>
			</Form>
		);
	}
};

ResultsFilter.propTypes = {
	racerClasses: PropTypes.array.isRequired,
	setFilter: PropTypes.func.isRequired
};

export default ResultsFilter;
