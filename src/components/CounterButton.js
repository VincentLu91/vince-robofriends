import React, { PureComponent } from 'react';

class CounterButton extends PureComponent { // good for passing down to dumb components
	constructor() {
		super();
		this.state = {
			count: 0
		}
	}
	// don't use it too often. use as needed for optimizing number of renders
	shouldComponentUpdate(nextProps, nextState) { // lifecycle method
		if (this.state.count !== nextState.count) {
			return true
		}
		return false
	}
	updateCount = () => {
		// this.setState({ count: this.state.count + 1}) // this is one way
		// or
		this.setState(state => {
			return {count: state.count + 1}
		})
	}
	render() {
		return (
			<button color={this.props.color} onClick={this.updateCount}>
				Count: {this.state.count}
			</button>
		);
	}
}

export default CounterButton;