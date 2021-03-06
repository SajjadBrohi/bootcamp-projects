function playSound(key) {
	var drum = '';

	switch (key) {
		case 'a':
			drum = new Audio('sounds/kick-bass.mp3');
			break;

		case 'w':
			drum = new Audio('sounds/crash.mp3');
			break;

		case 's':
			drum = new Audio('sounds/snare.mp3');
			break;

		case 'd':
			drum = new Audio('sounds/tom-1.mp3');
			break;

		case 'j':
			drum = new Audio('sounds/tom-2.mp3');
			break;

		case 'k':
			drum = new Audio('sounds/tom-3.mp3');
			break;

		case 'l':
			drum = new Audio('sounds/tom-4.mp3');
			break;

		default:
			console.log('default case');
			break;
	}

	drum.play();
}

function animateDrum(drum) {
	const drumClassList = document.querySelector('.' + drum).classList;

	drumClassList.add('pressed');
	setInterval(() => drumClassList.remove('pressed'), 100);
}

$('.drum').on('click', function () {
	playSound(this.innerText);
	animateDrum(this.innerText);
});

$('body').on('keypress', function (event) {
	playSound(event.key);
	animateDrum(event.key);
});

console.log('working');
