const toSecs = 1000;
const toMins = toSecs * 60;
const toHours = toMins * 60;
const toDays = toHours * 24;

class Timer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currDate: new Date(Date.now())
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
				TimerBox({value: values['days'], label: 'days'}),
				TimerBox({value: values['hours'], label: 'hours'}),
				TimerBox({value: values['mins'], label: 'mins'}),
				TimerBox({value: values['secs'], label: 'secs'}),
			)
		);
	}
}

let getTimerValues = (currDate) => {
	let dateDict = {};
	let nextHol = getNextHol(currDate);
	console.log(nextHol);
	let mSecs = nextHol[1] - currDate; //time in ms until next holiday
		
	dateDict['days'] = Math.floor(mSecs/toDays);
	mSecs -= dateDict['days']*toDays;

	dateDict['hours'] = Math.floor(mSecs/toHours);
	mSecs -= dateDict['hours']*toHours;
		
	dateDict['mins'] = Math.floor(mSecs/toMins);
	mSecs -= dateDict['mins']*toMins;
		
	dateDict['secs'] = Math.floor(mSecs/toSecs);

	return(dateDict);
}

ReactDOM.render(
	React.createElement(Timer, {}, null),
	document.getElementById('holidayTracker')
);