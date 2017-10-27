'use strict';

describe('Controller: NewsnoticeCtrl', function () {

  // load the controller's module
  beforeEach(module('luZhouApp'));

  var NewsnoticeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NewsnoticeCtrl = $controller('NewsnoticeCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(NewsnoticeCtrl.awesomeThings.length).toBe(3);
  });
});
