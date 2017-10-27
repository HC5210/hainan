'use strict';

describe('Controller: NewscenterCtrl', function () {

  // load the controller's module
  beforeEach(module('luZhouApp'));

  var NewscenterCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NewscenterCtrl = $controller('NewscenterCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(NewscenterCtrl.awesomeThings.length).toBe(3);
  });
});
