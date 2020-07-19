const playerOneDiceNumber = Math.floor(Math.random() * 6) + 1;
const playerTwoDiceNumber = Math.floor(Math.random() * 6) + 1;

if (playerOneDiceNumber > playerTwoDiceNumber) {
	document.querySelector('.container h1').innerHTML = '🚩 Player 1 Wins!';
} else {
	document.querySelector('.container h1').innerHTML = '🚩 Player 2 Wins!';
}
