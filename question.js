function Quiz(Question) {
this.score = 0;
this.Question = Question;
this.questionIndex = 0;
}

Quiz.prototype.getquestionIndex = function(){
return this.questions[this.questionIndex];
}

Quiz.prototype.guess = function(answer){
if(this.getquestionIndex().iscorrectAnswer(answer)){
this.score++;
}
this.question++;
}

Quiz.prototype.isended = function(){
return this.questionIndex ===
this.questions.length;
}