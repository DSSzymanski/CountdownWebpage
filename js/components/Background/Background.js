let Background = () => {
	let background_img, background_author, background_link;
	let date = new Date(Date.now());
	let hol = getNextHol(date);
	[background_img, background_author, background_link] = getImage(hol[0]);

	return (
		React.createElement('div', {className:'image-container'},
			React.createElement('a', {href: background_link}, 
				React.createElement('img', {
					src:background_img, 
					alt:hol[0], 
					title:String("See " + background_author + "'s picture at " + background_link)
				}, null),
			)
		)
	);
}

let getImage = (holiday) => {
	if(holiday == "Labor Day"){
		return ['../images/labor-day.jpg', 'Philip Swinburn', 'https://unsplash.com/photos/vS7LVkPyXJU'];
	}
	else if(holiday == 'Thanksgiving') {
		return ['../images/thanksgiving.jpg', 'Claudio Schwarz', 'https://unsplash.com/photos/fXxsNyiqTio'];
	}
	else if(holiday == "Christmas Eve" || holiday == "Christmas") {
		return ['../images/christmas.jpg', 'Annie Spratt', 'https://unsplash.com/photos/QKo-op_gR9I'];
	}
	else if(holiday == "New Year/'s Eve" || holiday == "New Year/'s Day") {
		return ['../images/new-years.jpg', 'Cristian Escobar', 'https://unsplash.com/photos/abkEAOjnY0s'];
	}
	else if(holiday == "Memorial Day") {
		return ['../images/memorial-day.jpg', 'Chad Madden', 'https://unsplash.com/photos/IvD-eMV8PoU'];
	}
	else if(holiday == "Independence Day") {
		return ['../images/independence-day.jpg', 'Tom Dahm', 'https://unsplash.com/photos/oQGfLpwN22g'];
	}
	else{
		return ['../images/labor-day.jpg', 'Philip Swinburn', 'https://unsplash.com/photos/vS7LVkPyXJU'];
	}
}

ReactDOM.render(
	React.createElement(Background, {}, null),
	document.getElementById('background')
);