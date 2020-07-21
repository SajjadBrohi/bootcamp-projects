const levelTitle = $('#level-title');
const levelNumber = 1;

function changeLevelTitle() {
	levelTitle.text('Level ' + levelNumber);
}

function startGame() {
	//stub
}

$('body').on('keypress', () => {
	changeLevelTitle();
	startGame();
});
