import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TimeInput from './../src/timeInput.jsx';


class TimeWrapper extends Component {
	onFocusHandler(event){
		console.log("hello there you entered :  my name is ",event.target.name);
	}

	onBlurHandler(event) {
		console.log("you left ");
	};

	onTimeChangeHandler(val) {
		if (val.length === 5) {
			// do something with this value
		}
	}

	render() {
		return (
			<TimeInput
				name="example"
				initTime='11:12'
				ref="TimeInputWrapper"
				className='s-input -time'
				mountFocus='true'
				onTimeChange={this.onTimeChangeHandler}
				onFocusHandler={this.onFocusHandler}
				onBlurHandler={this.onBlurHandler}
			/>
		);
	}
};


export class App extends React.Component {
	render() {
		return (
				<TimeWrapper/>
		);
	}
}

ReactDOM.render(<App/>, document.querySelector("#myApp"));
