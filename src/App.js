import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component'
import './App.css';

class App extends Component {
	constructor(){
		super()

		this.state = {
			monsters: [],
			searchField: ''
		}
	}
	//ASYNC AWAIT VERSION
	//Run when the component renders in the page (LIFECYCLE METHOD)
	async componentDidMount() {
		// //Make the API Call
		// //Convert into JSON
		const users = await (
			await fetch('https://jsonplaceholder.typicode.com/users')
		).json()
		//Send to this.state
		this.setState({ monsters: users })
	}

	handleChange = (event) => this.setState({ searchField: event.target.value })
	
	render () {
		const { monsters, searchField } = this.state
		const filteredMonsters = monsters.filter(monster=> 
			monster.name.toLowerCase().includes(searchField.toLowerCase())
			)
		return (
			<div className="App">
				<h1> Monsters Rolodex </h1>
				<SearchBox
					placeholder='Search Monsters'
					handleChange={this.handleChange}
				/>
				<CardList monsters={filteredMonsters} />
			</div>
		)
	}
}

export default App;
