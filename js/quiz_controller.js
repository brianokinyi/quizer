function quiz(questions) {
	this.score = 0;
	this.questions = questions;
	this.questionIndex = 0;
}

quiz.prototype.getQuestionIndex = function () {
	return this.questions[this.questionIndex];
}

quiz.prototype.isEnded = function () {
	return this.questions.length === this.getQuestionIndex;
}

//Check if ans is correct 
quiz.prototype.guess = function (answer) {
	this.getQuestionIndex++;
	if (this.getQuestionIndex.correctAns(answer)) {
		this.score++;
	}
}