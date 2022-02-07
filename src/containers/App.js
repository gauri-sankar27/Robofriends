import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';

class App extends Component {

	constructor(){

		super()
		this.state = {
			s_robots : [],
			searchfield : ''

		}
	}

	componentDidMount() {
	// This class methon will chech if any changes are made to the state and if changes are made
	// it will automatically call the render() to make changes to virtual DOM
		fetch('https://jsonplaceholder.cypress.io/users')
			.then(response => response.json())
			.then(users => this.setState({s_robots : users}));

	}

	onSearchChange = (event) => {

		this.setState({ searchfield : event.target.value })
		}


	render() {

		const {s_robots,searchfield} = this.state;
		const filter_robots = s_robots.filter( robo => {
			return robo.name.toLowerCase().includes(searchfield.toLowerCase());
		})
		return !s_robots.length ?
			<h1>Loading</h1> :
			(

				<div className="tc">
					<h1>Robo Friends</h1>
					<SearchBox searchChange={this.onSearchChange} />
					<Scroll>
						<CardList robots={filter_robots} />
					</Scroll>
				</div>


			);
		

	}
}
export default App;