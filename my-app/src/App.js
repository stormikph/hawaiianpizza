import React, { Component } from 'react';
import './App.css';

function App() {
	console.log(new Date().toLocaleString());
	return (
		<div className='App'>
			<Header />
			<TimeInputContainer />
			<TimeDisplay />
		</div>
	);
}

export default App;

function Header() {
	return <h1>Let's Make a Hawaiian Pizza!</h1>;
}

class TimeInputContainer extends Component {
	render() {
		return (
			<div className='time-input-container'>
				<input type='text' />
				<button>Enter</button>
			</div>
		);
	}
}

function TimeDisplay() {
	return <p>hit</p>;
}
