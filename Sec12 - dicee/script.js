function gameOfDice() {
	const playerOneDiceNumber = Math.floor(Math.random() * 6) + 1;
	const playerTwoDiceNumber = Math.floor(Math.random() * 6) + 1;
	const containerHeading = document.querySelector('.container h1');

	if (playerOneDiceNumber > playerTwoDiceNumber) {
		containerHeading.innerHTML = '🚩 Player 1 Wins!';
	} else if (playerOneDiceNumber === playerTwoDiceNumber) {
		containerHeading.innerHTML = 'Draw!';
	} else {
		containerHeading.innerHTML = 'Player 2 Wins! 🚩';
	}

	document
		.querySelector('.img1')
		.setAttribute('src', 'images/dice' + playerOneDiceNumber + '.png');

	document
		.querySelector('.img2')
		.setAttribute('src', 'images/dice' + playerTwoDiceNumber + '.png');
}

window.onbeforeunload = gameOfDice();
