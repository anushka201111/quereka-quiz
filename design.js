function Quesiton(text, choices, answer){
this.text = text;
this.choices = choices;
this.answer = answer;
this.Question = question;
}

Question.prototype.iscorrectanswer = function(choice) {
return this.answer === choice;
}

