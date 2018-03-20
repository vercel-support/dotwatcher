import 'jest-styled-components';

import Hero from '../index';
import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

describe('<Hero />', () => {
	it('renders <Hero />', () => {
		const tree = renderer.create(<Hero title="Hero Title" byline="Hero Byline" />).toJSON()
		expect(tree).toMatchSnapshot()
	});
});
