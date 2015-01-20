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
      'Not doing something strange Men\'s loo',
      'Reverse parking',
      'Not putting the wrong plastic in the wrong place'
    ];

    $scope.startTime = null;

    $scope.totalTime = null;

    $scope.selectedTask = null;
    $scope.previousTask = null;

    $scope.toggleTimer = function(){
    	if($scope.startTime){
        $scope.previousTask = $scope.selectedTask || 'Nothing in particular';
    		$scope.totalTime = Math.floor(Date.now() / 1000) - $scope.startTime;
    		$scope.startTime = null;
    	}else{
    		$scope.totalTime = null;
    		$scope.startTime = Math.floor(Date.now() / 1000);
    	}
    };

  });
