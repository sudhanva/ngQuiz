app.controller('quizCtlr',function($scope,quizMetrix,DataService){
	$scope.quizMetrix = quizMetrix;
	$scope.activeQuestion = 0;
	$scope.quizQuestions = DataService.quizQuestions;
	
	$scope.error = false;
	$scope.finalyse = false;

	$scope.questionAnswered = function(){
		var quizLength = $scope.quizQuestions.length;
		var numQuestionAnswered = 0;
		for(var x = 0; x < quizLength; x++){
			if($scope.quizQuestions[$scope.activeQuestion].selected !== null ){
				numQuestionAnswered++;

				if(numQuestionAnswered >= quizLength){
					for( i=0; i < quizLength;i++ ){
						if($scope.quizQuestions[i].selected === null){
							$scope.setActiveQuestion(i);
							return;
						}
					}
					$scope.error= false;
					$scope.finalyse = true;
					return;
				}
			}
		}
		$scope.setActiveQuestion();
	}

	$scope.setActiveQuestion = function(index){
		if(index === undefined){
			var breakOut= false;
			var quizLength1 = $scope.quizQuestions.length - 1;
			while(! breakOut ){
				$scope.activeQuestion= $scope.activeQuestion < quizLength1?++$scope.activeQuestion:0;
				if($scope.activeQuestion === 0){
					$scope.error = true;
				}
				if($scope.quizQuestions[$scope.activeQuestion].selected === null){
					breakOut = true;
				}
			}
		}
		else
		{
			$scope.activeQuestion = index; 
		}
	}

	$scope.selectedAnswer = function(index){
		$scope.quizQuestions[$scope.activeQuestion].selected = index;
	}
	$scope.finalyseAnswers = function(){
		
		$scope.finalyse = false;
		$scope.numQuestionAnswered = 0;
		$scope.activeQuestion = 0;
		quizMetrix.changeState("quiz", false);
		quizMetrix.changeState("result", true);
	}
});