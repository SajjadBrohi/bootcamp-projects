const levelTitle = $('#level-title');
const buttons = $('.btn');
const computerButtonsPressed = [];
const playerButtonsPressed = [];
let levelNumber = 1;

console.log(buttons);

function gameOver() {
	$('body').addClass('.game-over');
	setInterval(() => $('body').removeClass('.game-over'), 500);
	levelTitle.text('Game Over, Press Any Key to Restart');
	levelNumber = 1;
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

function checkClickedNumber(button) {
	const buttonNumber = getIndexOfColor(button);
	playerButtonsPressed.push(buttonNumber);
	const indexOfCurrentButton = playerButtonsPressed.indexOf(buttonNumber);
	return (
		computerButtonsPressed[indexOfCurrentButton] === buttonNumber &&
		computerButtonsPressed.length === playerButtonsPressed.length
	);
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

function startGame() {
	computerButtonPress();
	changeLevelTitle();
}

$('body').on('keypress', () => {
	startGame();
});

buttons.on('click', (event) => {
	const clickedElementColor = event.target.id;
	buttonDisplayAndSOund(getIndexOfColor(clickedElementColor), 'pressed');

	if (checkClickedNumber(clickedElementColor)) {
		console.log('all elements clicked; new round');
		startGame();
	} else if (!checkClickedNumber(clickedElementColor)) {
		console.log(computerButtonsPressed);
		console.log(playerButtonsPressed);
		gameOver();
	}
});
