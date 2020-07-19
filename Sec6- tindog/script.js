function fibonacciGenerator(n) {
	//Do NOT change any of the code above 👆
	if (n === 0) {
		return [];
	} else if (n == 1) {
		return [0];
	}

	const fibNumbers = [0, 1];
	let fibLength = fibNumbers.length;

	while (fibLength < n) {
		fibNumbers.push(fibNumbers[fibLength - 2] + fibNumbers[fibLength - 1]);
		fibLength = fibNumbers.length;
	}

	return fibNumbers;

	//Return an array of fibonacci numbers starting from 0.

	//Do NOT change any of the code below 👇
}
