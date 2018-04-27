			//listCtrl.$inject = ['quizMetrix'];

			app.controller('listCtrl',function($scope,quizMetrix,DataService){

				$scope.activeTurtle={};
				$scope.search="";
				$scope.quizActive=false;
				$scope.quizMetrix = quizMetrix; 
				$scope.turtlesData=DataService.turtlesData;

				$scope.activateQuiz = function(){
					quizMetrix.changeState(true);
				}
				$scope.changeActiveTurtle=function(index){
					$scope.activeTurtle = index;
				}

			});



