import React from 'react';
import Card from './Card';
import { shallow } from 'enzyme'; // we use shallow most of the time

/*
	mount does a full DOM rendering. It's ideal for use cases where we have
	components that interact with the DOM, API. It mounts the entire
	component on the DOM. Tests can affect each other when using the same
	Dom.
	Mount is rare
	
	render renders react components to a static HTML.
*/

it('expect to render Card component', () => {
	expect(shallow(<Card />)).toMatchSnapshot();
})