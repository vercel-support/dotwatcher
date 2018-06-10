import 'jest-styled-components';

import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import SocialButtons from '..';

describe('<SocialButtons />', () => {
	it('renders <SocialButtons />', () => {
		const tree = renderer.create(<SocialButtons/>).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
