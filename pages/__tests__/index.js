import 'jest-styled-components';

import {undecorated as App} from '../index';
import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import {withEntries} from '../../data/with-entries';

jest.mock('../../data/with-entries')

let AppComponent = withEntries(App)

describe('<App />', () => {
	const wrapper = shallow(<AppComponent />);
	it('renders <App />', () => {
		expect(wrapper.dive().find('title').length).toBe(1);
	});
});
