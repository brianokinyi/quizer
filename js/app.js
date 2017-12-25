function populate () {
	if (quiz.isEnded()) {
		showScore();
	} else{
		//show question
		var element = document.getElementById("question");
		element.innerHTML = quiz.getQuestionIndex().text;

		//Show choices
		var choices = quiz.getQuestionIndex().choices;
		for (var i=0 ;i < choices.length; i++) {
			var element = document.getElementById("choice" + i);
			element.innerHTML = choices[i];
			guess("btn" + i, choices[i]);
		}
	}
};

function guess (id, guess) {
	var button = document.getElementById(id);
	button.onclick = function () {
		quiz.guess(guess);
		populate();
	}
}

function showScore() {
	var gameOverHTML = "<h1>Result</h1>";
	gameOverHTML += "<h2 id='score'>Your scores: " + quiz.score + "</h2>";
	var element = document.getElementById("quiz");
	element.innerHTML = gameOverHTML;
}

var questions = [
	new question("Which one is not an object oriented programming language?", ["Java", "C#", "C++", "C"], "C"),
	new question("Which language is used for styling web pages?", ["HTML", "JQuery#", "CSS", "XML"], "CSS"),
	new question("There are __________ main components of object oriented programming", ["1", "6", "2", "4"], "4"),
	new question("MVC is a ___________", ["language", "Library", "Framework", "All"], "Framework"),
];

var quiz = new quiz (questions);

populate();