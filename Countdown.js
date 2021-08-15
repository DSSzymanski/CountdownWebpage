const toSecs = 1000;
const toMins = toSecs * 60;
const toHours = toMins * 60;
const toDays = toHours * 24;

let holidays = [
	["Labor Day", new Date('September 5, 2021 23:00:00'), new Date('September 6, 2021 23:00:00')],
	["Thanksgiving", new Date('November 24 2021, 23:00:00'), new Date('November 25, 2021 23:00:00')],
	["Christmas", new Date('December 24, 2021 17:00:00'), new Date('December 25, 2021 23:00:00')],
	["New Year/'s Day", new Date('December 31, 2021 17:00:00'), new Date('January 1, 2022 23:00:00')],
	["Memorial Day", new Date('May 29, 2022 23:00:00'), new Date('May 30, 2022 23:00:00')],
	["Independence Day", new Date('July 3, 2022 23:00:00'), new Date('July 4, 2022 23:00:00')]
];

let getCurrDate = () => {
	return new Date(Date.now());
}

let isHoliday = (currDate) => {
	for(let i = 0; i < holidays.length; i++) {
		if(currDate < holidays[i][2]  && currDate > holidays[i][1]) {
			return holidays[i][0];
		}
	}
	return -1;
}

let getNextHol = (currDate) => {
	let i = 0;
	while(currDate - holidays[i][1] > 0) {
		i++;
	}
	return holidays[i];
}

let setHidden = (element) => {
	if(element.style.display != "none") {
		element.style.display = "none";
	}
}

let setViewable = (element) => {
	if(element.style.display == "none") {
		element.style.display = "flex";
	}
}

let setupTimer = (currDate) => {
	let nextHol = getNextHol(currDate);
	document.getElementById('holiday').innerText = nextHol[0];
	let mSecs = nextHol[1] - currDate;
		
	let days = Math.floor(mSecs/toDays);
	mSecs -= days*toDays;
	document.getElementById('days').innerText = Math.floor(days);

	let hours = Math.floor(mSecs/toHours);
	mSecs -= hours*toHours;
	document.getElementById('hours').innerText = Math.floor(hours);
		
	let mins = Math.floor(mSecs/toMins);
	mSecs -= mins*toMins;
	document.getElementById('mins').innerText = Math.floor(mins);
		
	let secs = Math.floor(mSecs/toSecs);
	document.getElementById('secs').innerText = Math.floor(secs);
}

let tracker = () => {
	let currDate = getCurrDate();
	let currHoliday = isHoliday(currDate);
	if(currHoliday != -1){
		document.getElementById('holidayBox').setAttribute('style', "display: none;");
		document.getElementById('dateDiv').setAttribute('style', "display: none;");
		let holidayDiv = document.getElementById('holidayTracker');
		holidayDiv.innerText = "Happy " + currHoliday + "!";
	}
	else{
		setViewable(document.getElementById('holidayBox'));
		setViewable(document.getElementById('dateDiv'));
		setupTimer(currDate);
	}
}

let startTracker = () => {
	tracker();
	setInterval(tracker, 1000);
}
