import React from 'react';
import Counterbutton from './CounterButton';
import { shallow } from 'enzyme';

it('expect to render Counterbutton component', () => {
	const mockColor = 'red'
	expect(shallow(<Counterbutton color={mockColor} />)).toMatchSnapshot();
})

it('correctly increments the counter', () => {
	const mockColor = 'red'
	const wrapper = shallow(<Counterbutton color={mockColor} />);
	
	wrapper.find('[id="counter"]').simulate('click');
	wrapper.find('[id="counter"]').simulate('click');
	expect(wrapper.state()).toEqual({ count: 2}); // click twice
	wrapper.find('[id="counter"]').simulate('click');
	expect(wrapper.state()).toEqual({ count: 3}); // now three times
	wrapper.find('[id="counter"]').simulate('keypress');
	expect(wrapper.state()).toEqual({ count: 3});
	expect(wrapper.props().color).toEqual('red'); // finding specific 'color' prop to be equal to red from CounterButton component
})