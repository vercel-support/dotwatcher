import Post from '../index';
import React from 'react';
import TimeAgo from 'react-timeago';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { wrap } from 'module';

const mockPostData = {
	title: 'Post Title',
	body: 'Post body.',
	date: new Date().getTime()
}

describe('<Post />', () => {
	const wrapper = shallow(<Post key="0" id="1" data={mockPostData} />);
	it('renders post title', () => {
		expect(wrapper.find('Link').dive().text()).toEqual('Post Title');
	});
});
