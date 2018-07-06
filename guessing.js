var gameDifficulty = "easy";
var rgbMin = 0;
var rgbMax = 255;
var random_R;
var random_G;
var random_B;
var correctGuess;
var gameOver = false;
var correctSquare;
var squares;
newColors();

function newColors() {
	console.log("game difficulty is " + gameDifficulty);
	gameOver = false;
	document.getElementById("navRightItem").innerHTML = "NEW COLORS";
	random_R = Math.floor(Math.random() * (rgbMax - rgbMin + 1)) + rgbMin;
	random_G = Math.floor(Math.random() * (rgbMax - rgbMin + 1)) + rgbMin;
	random_B = Math.floor(Math.random() * (rgbMax - rgbMin + 1)) + rgbMin;
	correctGuess = random_R + ", " + random_G + ", " + random_B;
	document.getElementById("rgbValue").innerHTML = correctGuess;
	document.getElementById("header").style.backgroundColor="#098ebf";
	document.getElementById("bool").innerHTML = "";
	if (gameDifficulty == "easy") {
		squares = document.querySelectorAll("button.easy");
		for (var i=0; i < squares.length; i++) {
			random_R = Math.floor(Math.random() * (rgbMax - rgbMin + 1)) + rgbMin;
			random_G = Math.floor(Math.random() * (rgbMax - rgbMin + 1)) + rgbMin;
			random_B = Math.floor(Math.random() * (rgbMax - rgbMin + 1)) + rgbMin;
			
			squares[i].classList.remove("hidden");
			squares[i].style.backgroundColor="rgb(" + random_R + ", " + random_G + ", " + random_B + ")";
		}
		correctSquare = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
		squares[correctSquare].style.backgroundColor="rgb(" + correctGuess + ")";
	} else if (gameDifficulty == "hard") {
		squares = document.querySelectorAll("button");
		for (var i=0; i < squares.length; i++) {
			random_R = Math.floor(Math.random() * (rgbMax - rgbMin + 1)) + rgbMin;
			random_G = Math.floor(Math.random() * (rgbMax - rgbMin + 1)) + rgbMin;
			random_B = Math.floor(Math.random() * (rgbMax - rgbMin + 1)) + rgbMin;
			
			squares[i].classList.remove("hidden");
			squares[i].style.backgroundColor="rgb(" + random_R + ", " + random_G + ", " + random_B + ")";
		}
		correctSquare = Math.floor(Math.random() * (5 - 0 + 1)) + 0;
		squares[correctSquare].style.backgroundColor="rgb(" + correctGuess + ")";
	}
	console.log("correct square is " + correctSquare);
}

function easyMode() {
	document.getElementById("easy").classList.add("active");
	document.getElementById("hard").classList.remove("active");
	document.getElementById("hardRow").classList.add("hidden");
	gameDifficulty = "easy";
	newColors();
}

function hardMode() {
	document.getElementById("hard").classList.add("active");
	document.getElementById("easy").classList.remove("active");
	document.getElementById("hardRow").classList.remove("hidden");
	gameDifficulty = "hard";
	newColors();
}

function userAnswer(square){
	if (!gameOver) {	
		if (square == correctSquare) {
			correctAnswer();
		} else {
			wrongAnswer(square);
		}
	}
}

function correctAnswer() {
	gameOver = true;
	document.getElementById("navRightItem").innerHTML = "PLAY AGAIN ?";
	document.getElementById("bool").innerHTML = "Correct !!!";
	document.getElementById("header").style.backgroundColor="rgb(" + correctGuess + ")";
	for (var i=0; i < squares.length; i++) {
		squares[i].classList.remove("hidden");
		squares[i].style.backgroundColor="rgb(" + correctGuess + ")";
	}
}

function wrongAnswer(square) {
	document.getElementById("bool").innerHTML = "Nope, try again";
	//$('#'+squares[square]).fadeOut();
	squares[square].classList.add("hidden");
}