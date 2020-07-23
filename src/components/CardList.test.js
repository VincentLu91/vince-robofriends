import React from 'react';
import CardList from './CardList';
import { shallow } from 'enzyme';

it('expect to render CardList component', () => {
	const mockRobots = [
		{
			id: 1,
			name: 'John Snow',
			username: 'JohnJohn',
			email: 'john@gmail.com'
		}
	]
	expect(shallow(<CardList robots={mockRobots}/>)).toMatchSnapshot();
})