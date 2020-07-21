const levelTitle = $('#level-title');
const buttons = $('.btn');
const computerButtonsPressed = [];
const playerButtonsPressed = [];
let levelNumber = 0;

console.log(buttons);

function gameOver() {
	$('body').addClass('game-over');
	console.log($('body').attr('class'));

	setTimeout(() => $('body').removeClass('game-over'), 100);
	levelTitle.text('Game Over, Press Any Key to Restart');

	const gameOverSound = new Audio('sounds/wrong.mp3');
	gameOverSound.play();
	levelNumber = 0;
	computerButtonsPressed.length = 0;
	playerButtonsPressed.length = 0;
}

function getIndexOfColor(color) {
	let indexNumber = 0;

	switch (color) {
		case 'green':
			indexNumber = 0;
			break;
		case 'red':
			indexNumber = 1;
			break;
		case 'yellow':
			indexNumber = 2;
			break;
		case 'blue':
			indexNumber = 3;
			break;
		default:
			console.log('Default case');
			break;
	}

	return indexNumber;
}

function checkClickedNumber(buttonNumber) {
	const indexOfCurrentButton = playerButtonsPressed.indexOf(buttonNumber);
	return computerButtonsPressed[indexOfCurrentButton] === buttonNumber;
}

function buttonDisplayAndSOund(buttonNumber, classChange) {
	const buttonColor = buttons[buttonNumber].getAttribute('id');
	const buttonSound = new Audio('sounds/' + buttonColor + '.mp3');
	buttonSound.play();

	buttons[buttonNumber].classList.add(classChange);
	setInterval(() => buttons[buttonNumber].classList.remove(classChange), 100);
}

function computerButtonPress() {
	const buttonNumber = Math.floor(Math.random() * 4);
	computerButtonsPressed.push(buttonNumber);
	buttonDisplayAndSOund(buttonNumber, 'computer-press');
}

function changeLevelTitle() {
	levelTitle.text('Level ' + levelNumber);
}

function newRound() {
	levelNumber++;
	computerButtonPress();
	changeLevelTitle();
}

$('body').on('keypress', () => {
	newRound();
});

buttons.on('click', (event) => {
	const clickedElementColor = event.target.id;
	buttonDisplayAndSOund(getIndexOfColor(clickedElementColor), 'pressed');
	const buttonNumber = getIndexOfColor(clickedElementColor);
	playerButtonsPressed.push(buttonNumber);

	if (checkClickedNumber(buttonNumber)) {
		console.log('Good click');
		console.log(computerButtonsPressed);
		console.log(playerButtonsPressed);
		if (computerButtonsPressed.length === playerButtonsPressed.length) {
			playerButtonsPressed.length = 0;

			console.log('New Round');
			setTimeout(() => newRound(), 1000);
		}
	} else if (!checkClickedNumber(buttonNumber)) {
		console.log(computerButtonsPressed);
		console.log(playerButtonsPressed);
		gameOver();
	}
});
