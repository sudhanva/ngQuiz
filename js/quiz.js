app.controller('quizCtlr',function($scope,quizMetrix,DataService){
	$scope.quizMetrix = quizMetrix;
	$scope.activeQuestion = 0;
	$scope.quizQuestions = DataService.quizQuestions;
	$scope.numQuestionAnswered = 0;

	$scope.questionAnswered =function(){
		$scope.quizLength = $scope.quizQuestions.length;
		if($scope.quizQuestions[$scope.activeQuestion].selected === null ){
			$scope.numQuestionAnswered++;
			$scope.setActiveQuestion();
			if($scope.numQuestionAnswered >= $scope.quizLength){
			}
		}
	}

	$scope.setActiveQuestion = function(){
		var breakOut=false;
		var quizLength = $scope.quizQuestions.length-1;
		while(!breakOut){
			$scope.activeQuestion= $scope.activeQuestion < quizLength?++$scope.activeQuestion:0;
			if($scope.quizQuestions[$scope.activeQuestion].selected === null){
				breakOut = true;
			}
		}
	}

	$scope.selectedAnswer = function(index){
		$scope.quizQuestions[$scope.activeQuestion].selected = index;
	}

});