import 'jest-styled-components';

import App from '../index';
import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import {withEntries} from '../../data/with-entries';

jest.mock('../../data/with-entries')

const posts = [
	{
		sys: {
			id: 1
		},
		data: {
			title: 'Post Title #1',
			slug: 'post-title-1',
			date: '2018-03-20T13:46:51.000Z',
			body: 'Post body.'
		}
	},
	{
		sys: {
			id: 2
		},
		data: {
			title: 'Post Title #2',
			slug: 'post-title-1',
			date: '2018-02-20T13:46:51.000Z',
			body: 'Post body.'
		}
	},
	{
		sys: {
			id: 3
		},
		data: {
			title: 'Post Title #3',
			slug: 'post-title-1',
			date: '2018-01-20T13:46:51.000Z',
			body: 'Post body.'
		}
	}
];

describe('<App />', () => {
	const wrapper = shallow(<App posts={posts} />);
	it('renders <App />', () => {
		console.log(wrapper.html())
		expect(wrapper.find('Wrapper').length).toBe(1);
	});
});
