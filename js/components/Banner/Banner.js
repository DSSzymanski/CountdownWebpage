let Banner = () => {
	let date = new Date(Date.now());
	let status = isHoliday(date);
	let holString = getNextHol(date)[0];
	let bannerString;

	if(status == true && (holString == "Christmas" || holString == "Christmas Eve")) {
		bannerString = 'Merry ';
	}
	else if(status == true) {
		bannerString = 'Happy ';
	}
	else {
		bannerString = 'Days until ';
	}

	return (
		React.createElement('div', {className:'banner-container'},
			bannerString + holString
		)
	);
}

ReactDOM.render(
	React.createElement(Banner, {}, null),
	document.getElementById('banner')
);