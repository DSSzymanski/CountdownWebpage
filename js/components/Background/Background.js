/**
 * Background is a React component that returns the structure for the background
 * image (div > a > img). The image will be clickable, which will bring the
 * user to the owner's unsplash page where the image was obtained from. Also
 * includes a hover displaying the author's name and the link as well.
 * 
 * @returns		{component}		returns a react component representing the background image.
 */
let Background = () => {
	//vars for background information
	let background_img, background_author, background_link;
	let date = new Date(Date.now());
	let hol = getNextHol(date);
	//initializes vars to correct holiday image
	[background_img, background_author, background_link] = getImage(hol[0]);

	//return empty div if not nothing was returned
	if(background_img == ""){return React.createElement('div', {className:'image-container'}, null);}

	//return the component
	return (
		React.createElement('div', {className:'image-container'},
			React.createElement('a', {href: background_link}, 
				React.createElement('img', {
					src:background_img, 
					alt:hol[0], 
					//hover text
					title:String("See " + background_author + "'s picture at " + background_link)
				}, null),
			)
		)
	);
}

/**
 * getImage is a function that acts as a basic lookup table. Returns holiday information if 
 * it exists in table, otherwise returns array of 3 empty strings if not found.
 * 
 * @param	{string} 	holiday: string representing which holiday it is.
 * 
 * @returns	{array}		returns array of information in 3 strings about holiday in form 
 * 							[image_path, image_author, image_url]
 */
let getImage = (holiday) => {
	let holidayDict = {
		"Labor Day": ['../images/labor-day.jpg', 'Philip Swinburn', 'https://unsplash.com/photos/vS7LVkPyXJU'],
		"Thanksgiving": ['../images/thanksgiving.jpg', 'Claudio Schwarz', 'https://unsplash.com/photos/fXxsNyiqTio'],
		"Christmas Eve": ['../images/christmas.jpg', 'Annie Spratt', 'https://unsplash.com/photos/QKo-op_gR9I'],
		"Christmas": ['../images/christmas.jpg', 'Annie Spratt', 'https://unsplash.com/photos/QKo-op_gR9I'],
		"New Year/'s Eve": ['../images/new-years.jpg', 'Cristian Escobar', 'https://unsplash.com/photos/abkEAOjnY0s'],
		"New Year/'s Day": ['../images/new-years.jpg', 'Cristian Escobar', 'https://unsplash.com/photos/abkEAOjnY0s'],
		"Memorial Day": ['../images/memorial-day.jpg', 'Chad Madden', 'https://unsplash.com/photos/IvD-eMV8PoU'],
		"Independence Day": ['../images/independence-day.jpg', 'Tom Dahm', 'https://unsplash.com/photos/oQGfLpwN22g']
	};

	return (holiday in holidayDict ? holidayDict[holiday] : ['', '', '']);
}

//render image to page
ReactDOM.render(
	React.createElement(Background, {}, null),
	document.getElementById('background')
);