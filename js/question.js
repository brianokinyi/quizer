function question(text, choices, ans) {
	this.text = text;
	this.choices = choices;
	this.ans = ans;
}

//Add a method over a prototype
question.prototype.correctAns = function (choice) {
	return choice === this.ans;
}