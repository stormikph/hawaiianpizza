import React, { Component } from 'react';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			// time: 0,
			seconds: '00',
			minutes: '',
		};
		// this.handleEnterTime = this.handleEnterTime.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({
			minutes: event.target.value,
		});
	}

	// handleEnterTime(timeInputValue) {
	// 	//e.target.value is always a string
	// 	const time = Number(timeInputValue);
	// 	if (time !== 'number' && Number.isNaN(time)) return;
	// 	this.setState({
	// 		...this.state,
	// 		time,
	// 	});
	// }

	render() {
		const { minutes, seconds } = this.state;

		return (
			<div className='App'>
				<Header />
				<TimeInputContainer
					/*handleEnterTime={this.handleEnterTime}*/ minutes={minutes}
				/>
				<TimeDisplay minutes={minutes} seconds={seconds} />
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
		const { minutes } = this.props;

		return (
			<div className='time-input-container'>
				<input
					type='text'
					placeholder='Enter time in minutes'
					value={timeInputValue}
					onChange={this.handleTimeChange}
					minutes={minutes}
				/>
				<button onClick={this.handleSubmitTime}>Enter</button>
			</div>
		);
	}
}

class TimeDisplay extends Component {
	render() {
		const { minutes, seconds } = this.props;
		return (
			<div>
				<h1 style={{ fontSize: 100, marginLeft: 100 }}>
					{minutes}:{seconds}
				</h1>
			</div>
		);
	}
}
