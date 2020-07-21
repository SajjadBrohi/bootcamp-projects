const levelTitle = $('#level-title');
const levelNumber = 1;
const buttons = $('.btn');
const buttonsPressed = [];

console.log(buttons);

function buttonDisplayAndSOund(buttonNumber) {
	const buttonColor = buttons[buttonNumber].getAttribute('id');
	const buttonSound = new Audio('sounds/' + buttonColor + '.mp3');
	console.log(buttonColor);
	buttonSound.play();

	buttons[buttonNumber].classList.add('computer-press');
	setInterval(
		() => buttons[buttonNumber].classList.remove('computer-press'),
		100,
	);
}

function computerButtonPress() {
	const buttonNumber = Math.floor(Math.random() * 4);
	buttonsPressed.push(buttonNumber);
	buttonDisplayAndSOund(buttonNumber);
}

function changeLevelTitle() {
	levelTitle.text('Level ' + levelNumber);
}

function startGame() {
	computerButtonPress();
}

$('body').on('keypress', () => {
	changeLevelTitle();
	startGame();
});
