import 'jest-styled-components';

import {undecorated as Race} from '../index';
import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import {withEntry} from '../../data/with-entry';

jest.mock('../../data/with-entry')

let RaceComponent = withEntry(Race)

describe.skip('<App />', () => {
	const wrapper = shallow(<RaceComponent />);
	it('renders <App />', () => {
        console.log(wrapper.dive().html())
		expect(wrapper.dive().find('title').length).toBe(1);
	});
});
