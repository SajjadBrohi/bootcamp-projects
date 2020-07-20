const drumSet = document.querySelectorAll('.set button');

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

drumSet.forEach((drum) =>
	drum.addEventListener('click', function () {
		playSound(this.innerHTML);
	}),
);
