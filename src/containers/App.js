import React, { Component } from 'react';
import { connect } from 'react-redux';
import MainPage from '../components/MainPage';
//import {robots} from '../robots';
import './App.css';
import { setSearchField, requestRobots } from '../actions';

const mapStateToProps = state => {
	return {
		searchField: state.searchRobots.searchField, // this line is useless unless we work with combined root reducer
		// searchField: state.searchField // only works when searchRobots is the only reducer
		robots: state.requestRobots.robots,
		isPending: state.requestRobots.isPending
		//error: state.requestRobots.error
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
		onRequestRobots: () => dispatch(requestRobots()) // this is the correction
	}
}

class App extends Component {
	/*
	constructor() {
		super()
		this.state = { // state describes our app.
			robots: []
			//searchfield: ''
		}
	}
	*/
	/*
	componentDidMount() {
		
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => this.setState({ robots: users}));
		
		//this.props.onRequestRobots(); // this is supposed to work but it's pending forever
	}
	*/
	/*
	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value}) // set the state of searchfield
	}
	*/
	render() {
		return <MainPage { ...this.props } />
		/*
		const { robots } = this.state
		const { searchField, onSearchChange } = this.props;
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchField.toLowerCase());
		})
		return !robots.length ?
		<h1>Loading</h1> :
		(
				<div className='tc'>
					<Header />
					<SearchBox searchChange={onSearchChange}/>
					<Scroll>
						<ErrorBoundary>
							<CardList robots={filteredRobots} />
						</ErrorBoundary>
					</Scroll>
				</div>
		);
		*/
	}
}

//export default App;
export default connect(mapStateToProps, mapDispatchToProps)(App);