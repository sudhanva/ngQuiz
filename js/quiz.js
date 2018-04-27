app.controller('quizCtlr',function($scope,quizMetrix,DataService){
	$scope.quizMetrix = quizMetrix;
	$scope.quizQuestions = DataService.quizQuestions;
});