import 'jest-styled-components';

import Placeholder from '../placeholder';
import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

describe.skip('<Placeholder />', () => {
	it('renders <Placeholder />', () => {
		const tree = renderer.create(<Placeholder />).toJSON()
		expect(tree).toMatchSnapshot()
	});
});
