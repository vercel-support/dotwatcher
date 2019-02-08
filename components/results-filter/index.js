import React from 'react';
import styled from 'styled-components';
import tachyons from 'styled-components-tachyons';
import PropTypes from 'prop-types';

const Form = styled.form`${tachyons}`;
const Label = styled.label`${tachyons}`;
const Select = styled.select`${tachyons}`;

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
				<Label fw5 mr3 htmlFor="filter">Filter by class</Label>
				<Select id="filter" name="filter" onChange={this.onSelectChange.bind(this)}>
					{
						this.props.racerClasses.map(racerClass => <option key={racerClass} value={racerClass}>{racerClass}</option>)
					}
				</Select>
			</Form>
		);
	}
};

ResultsFilter.propTypes = {
	racerClasses: PropTypes.array.isRequired,
	setFilter: PropTypes.func.isRequired
};

export default ResultsFilter;
