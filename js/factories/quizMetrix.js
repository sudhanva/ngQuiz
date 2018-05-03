app.factory('quizMetrix',function(DataService){
	var quizObj ={
		quizActive: false,
		resultActive: false,
		correctAnswers:[],
		changeState:function(metric,state){
			if(metric === "quiz"){
				quizObj.quizActive= state;
			}
			else if(metric === "result"){
				alert();
				quizObj.resultActive = state;
			}
			else{
				return false;
			}
		},
		markQuiz:function(){
			quizObj.correctAnswers = DataService.correctAnswers;
			for(i=0;i<DataService.quizQuestions.length;i++){
				if(DataService.quizQuestions[i] === DataService.correctAnswers[i]){
					DataService.quizQuestions[i].correct = true;
					quizObj.numCorrect++;
				}
				else{
					DataService.quizQuestions[i].correct =false;
				}
			}

		}
	};
	return quizObj;
});