TimerBox = (props) => {
	return (
		React.createElement('div', {className: props.label + 'box'},
				React.createElement('div', {id: props.label}, String(props.value)),
				String(props.label)
		)
	);
}