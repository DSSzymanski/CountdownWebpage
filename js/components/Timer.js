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
		console.log(this.state.currDate);
		return(
			React.createElement('div', {}, null)
		);
	}
}

ReactDOM.render(
	React.createElement(Timer, {}, null),
	document.getElementById('trackerRow')
);