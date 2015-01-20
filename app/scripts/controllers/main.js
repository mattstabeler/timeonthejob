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
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];


    $scope.startTime = null;

    $scope.totalTime = null;

    $scope.toggleTimer = function(){
    	if($scope.startTime){
    		$scope.totalTime = Math.floor(Date.now() / 1000) - $scope.startTime;
    		$scope.startTime = null;
    	}else{
    		$scope.totalTime = null;
    		$scope.startTime = Math.floor(Date.now() / 1000);

    	}
    };
  });
