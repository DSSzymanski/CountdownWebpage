/**
 * Banner is a React Component displaying the string header identifying which
 * date it is/is coming up next. Returns a basic div with a string inner text
 * with the holiday name and whether the timer represents the time until the
 * holiday starts or time until the holiday ends if it currently is a holiday.
 * 
 * @param		{boolean}		props.status: Status of if it's currently a holiday.
 * @param		{string}		props.hol_string: String containing the name of the
 * 											current/next holiday.
 * 
 * @returns 	{component} 	returns React component to be used as the 
 * 								heading.
 */
let Banner = (props) => {
	let bannerString;

	//Insert merry if it currently is Christmas or Christmas Eve
	if(props.status == true && (props.holString == "Christmas" || props.holString == "Christmas Eve")) {
		bannerString = 'Merry ';
	}
	//Insert Happy if it is currently a holiday not Xmas related
	else if(props.status == true) {
		bannerString = 'Happy ';
	}
	//Basic if the timer is representing a holiday coming up
	else {
		bannerString = 'Days until ';
	}

	return (
		React.createElement('div', {className:'banner-container'},
			bannerString + props.hol_string
		)
	);
}
