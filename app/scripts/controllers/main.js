'use strict';

/**
 * @ngdoc function
 * @name ftaTimerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ftaTimerApp
 */
angular.module('ftaTimerApp')
  .controller('MainCtrl', function ($scope) {

    $scope.thingsIMightBeDoing = [
      'Not putting teaspoons in the toilet',
      'Not doing something strange Men\'s loo',
      'Reverse parking',
      'Not putting the wrong plastic in the wrong place',
      'Not bumping my head on low hanging walls'
    ];

    $scope.startTime = null;

    $scope.totalTime = null;

    $scope.selectedTask = $scope.thingsIMightBeDoing[0];
    $scope.previousTask = null;

    $scope.toggleTimer = function(){
    	if($scope.startTime){
        $scope.previousTask = $scope.selectedTask || 'Nothing in particular';
    		$scope.totalTime = Math.floor(Date.now() / 1000) - Math.floor($scope.startTime / 1000);
    		$scope.startTime = null;
    	}else{
    		$scope.totalTime = null;
    		$scope.startTime = Date.now();
    	}
    };

    $scope.showMessage= function(){
      return $scope.selectedTask && $scope.startTime;
    };

    $scope.isStarted = function(){
      return $scope.startTime !== null;
    };
    $scope.getTasks = function(){
      return $scope.thingsIMightBeDoing;
    };

  });
