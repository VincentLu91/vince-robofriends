import React, { Component } from 'react';
import CounterButton from './CounterButton';

class Header extends Component {
	shouldComponentUpdate(nextProps, nextState) { // lifecycle method
		return false; // header component now renders ONCE
	}
	render() {
		return (
			<div>
				<h1 className='f1'>RoboFriends</h1>
				<CounterButton color={'red'} />
			</div>
		);
	}
}

export default Header;