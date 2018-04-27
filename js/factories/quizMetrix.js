app.factory('quizMetrix',function(){
	var quizObj ={
		quizActive: false,
		changeState:function(state){
			quizObj.quizActive= state;
		}
	};
	return quizObj;
});