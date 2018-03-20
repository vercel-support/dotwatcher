import 'jest-styled-components';

import Logo from '../logo';
import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

describe('<Logo />', () => {
	it('renders <Logo />', () => {
		const tree = renderer.create(<Logo>Page Title</Logo>).toJSON()
		expect(tree).toMatchSnapshot()
	});
});
