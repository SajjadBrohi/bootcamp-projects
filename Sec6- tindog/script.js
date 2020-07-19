function isLeap(year) {
	/**************Don't change the code above****************/

	var leapYear = 'Not leap year.';
	if (year % 4 === 0) {
		if ((year % 100 = 0)) {
			if ((year % 400 = 0)) {
				leapYear = 'Leap year.';
			} else {
				leapYear = 'Not leap year.';
			}
		} else {
			leapYear = 'Leap year.';
		}
	} else {
		leapYear = 'Not leap year.';
	}

	return leapYear;

	/**************Don't change the code below****************/
}

console.log(isLeap(1948));
