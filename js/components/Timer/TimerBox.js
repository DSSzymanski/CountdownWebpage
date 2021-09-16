/**
 * TimerBox is a React component used to show individual timer value box (e.g. Hours,
 * minutes, or seconds). Returns nested div, with a inner text string on the inside.
 * 
 * @param	{String} 	props.label: String to be displayed identifying which timer value
 *			 						 the time is representing.
 * @param	{Integer}	props.value: Integer representing a time value.
 * 
 * @returns	{component}	returns React component for a single timer value.
 */	
let TimerBox = (props) => {
	return (
		React.createElement('div', {className:'timer-box'},
				React.createElement('div', {id: props.label}, String(props.value)),
				props.label
		)
	);
}
