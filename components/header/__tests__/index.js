import 'jest-styled-components';

import Header from '../index';
import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

describe('<Header />', () => {
	it('renders <Header />', () => {
		const tree = renderer.create(<Header title="Page Title" />).toJSON()
		expect(tree).toMatchSnapshot()
	});
});
