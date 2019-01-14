import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tachyons from 'styled-components-tachyons';

const Div = styled.div`${tachyons}`;
const Header = styled.header`${tachyons}`;
const H2 = styled.h2`${tachyons}`;

const Section = ({title, children}) => {
	return (
		<Div fl_ns ph3 w_30_m w_20_l>
			<Header>
				<H2 ttu tracked f5 fw6 mt4 mt2_ns pb1 bb bw1 b__light_gray measure_narrow>
					{ title }
				</H2>
			</Header>
			{ children }
		</Div>
	);
};

Section.propTypes = {
	title: PropTypes.string.isRequired
};

export default Section;
