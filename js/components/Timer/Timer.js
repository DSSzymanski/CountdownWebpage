const toSecs = 1000; //conversion rate for ms to sec.
const toMins = toSecs * 60; //conversion rate for ms to mins.
const toHours = toMins * 60; //conversion rate for ms to hours.
const toDays = toHours * 24; //conversion rate for ms to days.

/**
 * Timer class is a React component that handles the timer elements. 
 * Component consists of the Banner component and 4 TimerBox components,
 * 1 for each of the following time values: days, hours, minutes, seconds.
 * The timer values either represent time until the next holiday, or time
 * until the current holiday ends if the current day is between the start
 * and end times of a holiday.
 * 
 * Timer has 1 state element, being a Date object representing the current
 * date.
 * 
 * @param 	props:	currently default for class initialization. No input
 * 					needed to effect class.
 */
class Timer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currDate: new Date(Date.now()) //current date
		};
	}

	//start interval when component is loaded to page
	componentDidMount() {
		this.timerInterval = setInterval(
			() => this.clockTick(),
			1000
		);
	}

	//clear interval when removed from page
	componentWillUnmount() {
		clearInterval(this.timerInterval);
	}

	//update Date object representing current date, used for interval fn above
	clockTick() {
		this.setState({
			currDate: new Date(Date.now())
		});
	}

	//render to screen
	render() {
		let status = isHoliday(this.state.currDate); //for Banner component
		let nextHol = getNextHol(this.state.currDate); //holiday string and timer time
		//get values for the timer values listed above
		let values = getTimerValues(nextHol[1], this.state.currDate);

		//return component
		return(
			React.createElement('div', {className: 'timer-container'},
				Banner({status: status, hol_string: nextHol[0]}), //Banner component
				React.createElement('div', {className: 'box-container'},
					TimerBox({value: values['days'], label: 'Days'}), //TimerBox for days remaining
					TimerBox({value: values['hours'], label: 'Hours'}), //TimerBox for hours remaining
					TimerBox({value: values['mins'], label: 'Mins'}), //TimerBox for minutes remaining
					TimerBox({value: values['secs'], label: 'Secs'}), //TimerBox for seconds remaining
				)
			)
		);
	}
}

/**
 * getTimerValues returns a dictionary of 4 values representing 4 time values
 * to display on the timer (keys = 'days', 'hours', 'minutes', 'seconds'). Uses
 * the constant conversion rates above to calculate.
 * 
 * @param	{Date}		nextHol: Date representing start of next holiday/time to compare
 * 								 current date with for calculations.
 * @param	{Date}		currDate: Date object representing current date/time.
 * 
 * @returns {Dict}		returns dictionary-like object containing the 4 timer values.
 */
let getTimerValues = (nextHol, currDate) => {
	let dateDict = {};
	let mSecs = nextHol - currDate; //time in ms until next holiday
	
	//calculate/store days left and remove from total
	dateDict['days'] = Math.floor(mSecs/toDays);
	mSecs -= dateDict['days']*toDays;

	//calculate/store hours left and remove from total
	dateDict['hours'] = Math.floor(mSecs/toHours);
	mSecs -= dateDict['hours']*toHours;
		
	//calculate/store mins left and remove from total
	dateDict['mins'] = Math.floor(mSecs/toMins);
	mSecs -= dateDict['mins']*toMins;
		
	//calculate seconds left
	dateDict['secs'] = Math.floor(mSecs/toSecs);

	return(dateDict);
}


//render to page
ReactDOM.render(
	React.createElement(Timer, {}, null),
	document.getElementById('timer')
);
