'use strict';

describe('Controller: CommentslistmoreCtrl', function () {

  // load the controller's module
  beforeEach(module('luZhouApp'));

  var CommentslistmoreCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CommentslistmoreCtrl = $controller('CommentslistmoreCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CommentslistmoreCtrl.awesomeThings.length).toBe(3);
  });
});
