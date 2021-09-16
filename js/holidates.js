//Array of upcoming holidays (in order by start date) to iterate over to find next holiday
//form of [String(holiday_name), Date(holiday_start), Date(holiday_end)]
let holidays = [
	["Thanksgiving", new Date('November 25 2021, 00:00:00'), new Date('November 25, 2021 23:59:59')],
	["Christmas Eve", new Date('December 24, 2021 00:00:00'), new Date('December 24, 2021 23:59:59')],
	["Christmas", new Date('December 25, 2021 00:00:00'), new Date('December 25, 2021 23:59:59')],
	["New Year/'s Eve", new Date('December 31, 2021 00:00:00'), new Date('December 31, 2021 23:59:59')],
	["New Year/'s Day", new Date('January 1, 2022 00:00:00'), new Date('January 1, 2022 23:59:59')],
	["Memorial Day", new Date('May 30, 2022 00:00:00'), new Date('May 30, 2022 23:59:59')],
	["Independence Day", new Date('July 4, 2022 00:00:00'), new Date('July 4, 2022 23:59:59')],
	["Labor Day", new Date('September 5, 2022 00:00:00'), new Date('September 5, 2022 23:59:59')]
];

/**
 * isHoliday returns true if the inputed date falls between a holiday's start and a
 * holiday's end and false otherwise. Used for banner to change banner string and in
 * the timer to pick whether the timer uses the holiday's start or end as the time.f
 * 
 * @param 	{Date}	currDate: date to compare to array of holidays to determine if
 * 							  the current date is a holiday or not.
 * 
 * @returns {bool}	returns boolean true if currDate is a holiday, false if not.
 */
let isHoliday = (currDate) => {
	for(let i = 0; i < holidays.length; i++) {
		if(currDate < holidays[i][2]  && currDate > holidays[i][1]) {
			return true;
		}
	}
	return false;
}

/**
 * getNextHol returns the holiday array entry ('holidays' above) for the 
 * next holiday based on the inputed date. Returns the end date if the 
 * inputed day is on a holiday and returns the start date otherwise
 * (end date is used to time how long is left in the holiday vs the
 * start date being how long until the holiday starts).
 * 
 * @param 	{Date}	currDate: date to compare to array of holidays to determine if
 * 							  the current date is a holiday or not.
 * 
 * @returns	{array}	returns array in format [String(holiday_name), Date(time_for_timer)]
 */
let getNextHol = (currDate) => {
	let i = 0;
	let whichDate = isHoliday(currDate) ? 2 : 1;
	
	while(currDate - holidays[i][whichDate] > 0) {
		i++;
	}

	return [holidays[i][0], holidays[i][whichDate]];
}
