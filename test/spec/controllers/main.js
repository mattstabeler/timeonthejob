'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('ftaTimerApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));


  it('should attach a list of things I might be doing on the cope', function () {
    expect(scope.thingsIMightBeDoing.length).toBeGreaterThan(0);
  });

  it('should let me start and stop the timer', function () {
    expect(scope.startTime).toBe(null);
    scope.toggleTimer();
    expect(scope.totalTime).toBe(null);
    expect(scope.startTime).not.toBe(null);
    scope.toggleTimer();
    expect(scope.totalTime).not.toBe(null);
    expect(scope.startTime).toBe(null);
  });
});
