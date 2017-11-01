var yWeed = 475;
var weedSize = 100;

var color = ['#92d090', '#ffcf79', '#e5e4d7', '#2c6700' ]

var time = 15;
var timeWeed;
var score = 0;

var divId = 0;

//Henter game- og timerh1-diven
var game = document.getElementById('game');
var timerH1 = document.getElementById('timerboard')
var scoreH1 = document.getElementById('scoreboard')
var plantsDiv = document.getElementById('plants')

//Sørger for at brukerne ikke kan høyre klikke på spillet
game.addEventListener('contextmenu', event => event.preventDefault());

// Sørger for at alle funksjoner kjører
window.onload = function() {
	drawTimer();
	drawWeed();
	scoreBoardUpdate();
}
	
// Lager og oppdaterer timeren
function drawTimer () {
	timerH1.innerHTML = 'Time: ' + time

	var timerInterval = setInterval( function () {
		if (time > 0) {
			time--;
			timerH1.innerHTML = 'Time: ' + time;
			}
		else {
			clearInterval(timerInterval)
			alert('Game over! Your score was ' + score);
			score = 0
			scoreBoardUpdate();
		}
	}, 1000)
}

// Oppdaterer scoreboard når funksjon er kalt, den vurderer parameteren om den er + eller -.
function scoreBoardUpdate (change) {
	switch (change) {
		case '+':
			score++;
			break;
		case '-':
			score--;

			break;
		
	}
	scoreH1.innerHTML = "Score: " + score;
}
// Object creating

function Weed (y, divId) {

	this.y = yWeed;
	this.id = divId

\

	this.draw = function () {
		var weed = document.createElement('div');
		weed.setAttribute('id', 'weed' + this.id);
		weed.setAttribute('onclick', 'weedClick(' + weed.id + ');')
		weed.style.backgroundColor = color[0];
		weed.style.width = weedSize + 'px';
		weed.style.height = weedSize + 'px';
		weed.style.marginTop = this.y + 'px';
		weed.style.marginLeft = Math.floor(Math.random()*800 + 1) + 'px';
		


		game.appendChild(weed);
	}



	
}

function weedClick(weed) {
	game.removeChild(weed);
	scoreBoardUpdate('+');
	drawWeed();	
}


function drawWeed () {

	var divText = new Weed(yWeed, divId)
	divText.draw();
}
