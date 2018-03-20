import 'jest-styled-components';

import React from 'react';
import Tweet from '../index';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

describe.skip('<Tweet />', () => {
	it('renders <Tweet />', () => {
		const tree = renderer.create(<Tweet />).toJSON()
		expect(tree).toMatchSnapshot()
	});
});
