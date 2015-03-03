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
      'Updating my TFS tasks',
      'Not bumping my head on low ceilings',
      'Not walking into cherry pickers',
      'Not doing strange yet undefined things in the Men\'s loo',
      'Not putting teaspoons in the toilet',
      'Reverse parking',
      'Not putting plastic cups in the wrong bin',
      'Not using the drip tray as a sink',
      'NOT putting Jam in the photocopier'
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
