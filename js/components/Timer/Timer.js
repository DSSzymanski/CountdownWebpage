class Timer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currDate: Date(Date.now())
		};
	}
	componentDidMount() {
		this.timerInterval = setInterval(
			() => this.clockTick(),
			1000
		);
	}

	componentWillUnmount() {
		clearInterval(this.timerInterval);
	}

	clockTick() {
		this.setState({
			currDate: new Date(Date.now())
		});
	}

	render() {
		let values = getTimerValues(this.state.currDate);
		return(
			React.createElement('div', {}, 
				TimerBox({value: values[0], label: 'days'}),
				TimerBox({value: values[1], label: 'hours'}),
				TimerBox({value: values[2], label: 'mins'}),
				TimerBox({value: values[3], label: 'secs'}),
			)
		);
	}
}

let getTimerValues = (currDate) => {
	let nextHol = getNextHol(currDate);
	let mSecs = nextHol[1] - currDate;
		
	let days = Math.floor(mSecs/toDays);
	mSecs -= days*toDays;

	let hours = Math.floor(mSecs/toHours);
	mSecs -= hours*toHours;
		
	let mins = Math.floor(mSecs/toMins);
	mSecs -= mins*toMins;
		
	let secs = Math.floor(mSecs/toSecs);

	return([days, hours, mins, secs]);
}

ReactDOM.render(
	React.createElement(Timer, {}, null),
	document.getElementById('trackerRow')
);