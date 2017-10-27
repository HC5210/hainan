'use strict';

describe('Controller: CaseteachCtrl', function () {

  // load the controller's module
  beforeEach(module('luZhouApp'));

  var CaseteachCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CaseteachCtrl = $controller('CaseteachCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CaseteachCtrl.awesomeThings.length).toBe(3);
  });
});
