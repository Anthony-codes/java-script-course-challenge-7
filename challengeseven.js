
(function() {

var Question = function(quest, answers, correctAns){
	this.quest = quest;
	this.answers = answers;
	this.correctAns = correctAns;

	
}


Question.prototype.displayQuestion = function() {
	console.log(this.quest);

	for (var i = 0; i < this.answers.length; i++){
		console.log(i + ': ' + this.answers[i]);
	}
}

Question.prototype.checkAnswer = function(ans){ 
	if (ans === this.correctAns) {
		console.log('Correct answer!');
	} else {
		console.log('Sorry that is incorrect. Try again! ');
	}
}




var pokemon = new Question('Which pokemon has type advantage from the ones listed? ', ['Blaziken', 'Leafeon', 'Treeko'], 0);

var persona = new Question('Which persona user awakened to the persona tomoe? ', ['Futaba', 'Chie', 'Mitsuru'], 1);

var onePiece = new Question('Which of these pirates survived the paramount war? ', ['Marco', 'Ace', 'Whitebeard'], 0);

var questions = [pokemon, persona, onePiece];

var q = Math.floor(Math.random() * questions.length);

questions[q].displayQuestion();

var answer = parseInt(prompt('Please select the correct answer. '));

questions[q].checkAnswer(answer);

})();













































