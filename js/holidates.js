let holidays = [
	["today", new Date('September 12, 2021 00:00:00'), new Date('September 13, 2021 00:00:00')],
	["Labor Day", new Date('September 5, 2021 23:00:00'), new Date('September 6, 2021 23:00:00')],
	["Thanksgiving", new Date('November 25 2021, 00:00:00'), new Date('November 25, 2021 23:59:59')],
	["Christmas Eve", new Date('December 24, 2021 00:00:00'), new Date('December 24, 2021 23:59:59')],
	["Christmas", new Date('December 24, 2021 17:00:00'), new Date('December 25, 2021 23:59:59')],
	["New Year/'s Eve", new Date('December 31, 2021 00:00:00'), new Date('December 31, 2021 23:59:59')],
	["New Year/'s Day", new Date('January 1, 2022 00:00:00'), new Date('January 1, 2022 23:59:59')],
	["Memorial Day", new Date('May 30, 2022 00:00:00'), new Date('May 30, 2022 23:59:59')],
	["Independence Day", new Date('July 4, 2022 00:00:00'), new Date('July 4, 2022 23:59:59')]
];

let isHoliday = (currDate) => {
	for(let i = 0; i < holidays.length; i++) {
		if(currDate < holidays[i][2]  && currDate > holidays[i][1]) {
			return true;
		}
	}
	return false;
}

let getNextHol = (currDate) => {
	let i = 0;
	let whichDate = isHoliday(currDate) ? 2 : 1;
	while(currDate - holidays[i][whichDate] > 0) {
		i++;
	}
	return [holidays[i][0], holidays[i][whichDate]];
}