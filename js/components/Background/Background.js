let Background = () => {
	let date = new Date(Date.now());
	let hol = getNextHol(date);
	background_img = getImage(hol[0]);

	return (
		React.createElement('div', {className:'image-container'},
			React.createElement('img', {src:background_img, alt:hol[0]}, null)
		)
	);
}

let getImage = (holiday) => {
	if(holiday == "Labor Day"){
		return;
	}
	else if(holiday == 'Thanksgiving') {
		return '../images/thanksgiving.jpg';
	}
	else if(holiday == "Christmas Eve" || holiday == "Christmas") {
		return;
	}
	else if(holiday == "New Year/'s Eve" || holiday == "New Year/'s Day") {
		return;
	}
	else if(holiday == "Memorial Day") {
		return;
	}
	else if(holiday == "Independence Day") {
		return;
	}
}

ReactDOM.render(
	React.createElement(Background, {}, null),
	document.getElementById('background')
);