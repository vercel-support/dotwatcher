import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {find} from 'lodash';
import styled from 'styled-components';
import tachyons from 'styled-components-tachyons';
import Wrapper from '../shared/wrapper';
import widont from '../../utils/widont';
import CarouselKey from './key';
import CarouselImage from './image';

const Div = styled.div`${tachyons}`;
const CarouselImageWrap = styled.div`
	order: 2;
${tachyons}`;

class Carousel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeKey: this.props.slides[0].sys.id
		};
		this.setActiveKey = this.setActiveKey.bind(this);
	}

	setActiveKey(key) {
		this.setState({
			activeKey: key
		});
	}

	render() {
		const keys = this.props.slides.map(slide => (
			<CarouselKey key={slide.sys.id} slide={slide} setActiveKey={() => this.setActiveKey(slide.sys.id)} activeKey={this.state.activeKey}/>
		));
		const activeSlide = find(this.props.slides, obj => {
			return obj.sys.id === this.state.activeKey;
		});

		return (
			<Div mh3 mh6_l mb4 mb5_ns flex_ns className="cf">
				<CarouselImageWrap fr w_100 w_70_ns bg_near_black>
					<CarouselImage key={activeSlide.sys.id} slide={activeSlide}/>
				</CarouselImageWrap>
				<Wrapper fl w_100 w_30_ns flex_auto flex_ns flex_column_ns>
					{keys}
				</Wrapper>
			</Div>
		);
	}
}
Carousel.propTypes = {
	slides: PropTypes.array.isRequired
};

export default Carousel;
