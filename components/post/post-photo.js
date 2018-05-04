import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import tachyons from 'styled-components-tachyons';
import Image from '../image';
import slugify from '../../utils/slugify';

const Div = styled.div`${tachyons}`;
const A = styled.a`${tachyons}`;

const Short = ({data, id}) => {
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
	data: PropTypes.object.isRequired,
	id: PropTypes.string.isRequired
};

export default Short;
