const drumSet = document.querySelectorAll('.set button');

function playSound(key) {
	switch (key) {
		case 'a':
			const drum = new Audio('sounds/crash.mp3');
			drum.play();
			break;

		default:
			console.log('default case');
			break;
	}
}

drumSet.forEach((drum) =>
	drum.addEventListener('click', function () {
		playSound(this.innerHTML);
	}),
);
