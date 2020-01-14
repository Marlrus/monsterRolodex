import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component'
import './App.css';

class App extends Component {
	constructor(){
		super()
		this.state = {
			monsters: []
		}
	}
	//ASYNC AWAIT VERSION
	//Run when the component renders in the page (LIFECYCLE METHOD)
	async componentDidMount() {
		// //Make the API Call
		// const response = await fetch('https://jsonplaceholder.typicode.com/users')
		// //Convert into JSON
		// const users = await response.json()
		// //Use the data to render 
		const users = await (
			await fetch('https://jsonplaceholder.typicode.com/users')
		).json()
		//Send to this.state
		this.setState({ monsters: users })
	}
	
	// Promise Version
	// //Run when the component renders in the page (LIFECYCLE METHOD)
	// componentDidMount() {
	// 	//Make the API Call
	// 	fetch('https://jsonplaceholder.typicode.com/users')
	// 	//Convert into JSON
	// 	.then(response => response.json())
	// 	//Use the data to render 
	// 	.then(users => this.setState({ monsters: users }))
	// }

	render () {
		return (
			<div className="App">
				<CardList name='Marlrus'>
				{
					this.state.monsters.map(monster => 
						<h1 key={monster.id}> {monster.name} </h1>
					)
				}
				</CardList>
			</div>
		)
	}
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
