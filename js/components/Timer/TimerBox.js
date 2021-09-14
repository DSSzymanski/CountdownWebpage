let TimerBox = (props) => {
	return (
		React.createElement('div', {className:'timer-box'},
				React.createElement('div', {id: props.label}, String(props.value)),
				String(props.label)
		)
	);
}