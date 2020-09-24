import React, { Component } from 'react';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			time: 0,
		};
		this.handleEnterTime = this.handleEnterTime.bind(this);
	}

	handleEnterTime(timeInputValue) {
		//e.target.value is always a string
		const time = Number(timeInputValue);
		if (time !== 'number' && Number.isNaN(time)) return;
		this.setState({
			...this.state,
			time,
		});
	}

	render() {
		return (
			<div className='App'>
				<Header />
				<TimeInputContainer handleEnterTime={this.handleEnterTime} />
				<TimeDisplay />
			</div>
		);
	}
}

export default App;

function Header() {
	return <h1>Let's Make a Hawaiian Pizza!</h1>;
}

class TimeInputContainer extends Component {
	constructor() {
		super();
		this.state = {
			timeInputValue: '',
		};
		this.handleTimeChange = this.handleTimeChange.bind(this);
		this.handleSubmitTime = this.handleSubmitTime.bind(this);
	}

	handleTimeChange(e) {
		const userInput = e.target.value;

		this.setState({
			...this.state,
			timeInputValue: userInput,
		});
	}

	handleSubmitTime() {
		const { handleEnterTime } = this.props;
		const { timeInputValue } = this.state;

		handleEnterTime(timeInputValue);
		this.setState({
			...this.state,
			timeInputValue: '',
		});
	}

	render() {
		const { timeInputValue } = this.state;

		return (
			<div className='time-input-container'>
				<input
					type='text'
					placeholder='Enter time in minutes'
					value={timeInputValue}
					onChange={this.handleTimeChange}
				/>
				<button onClick={this.handleSubmitTime}>Enter</button>
			</div>
		);
	}
}

function TimeDisplay() {
	return <p>{new Date().toLocaleDateString()}</p>;
}
