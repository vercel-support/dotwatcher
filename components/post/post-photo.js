import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import tachyons from 'styled-components-tachyons';
import Image from '../image';

const Div = styled.div`${tachyons}`;

const Short = ({data}) => {
	return (
		<React.Fragment>
			{ data.image ? <Image data={data.image.fields}/> : null }
			<Div lh_copy mv4>
				{data.title}
			</Div>
		</React.Fragment>
	);
};

Short.propTypes = {
	data: PropTypes.object.isRequired
};

export default Short;
