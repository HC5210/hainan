'use strict';

describe('Directive: expander2', function () {

  // load the directive's module
  beforeEach(module('luZhouApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<expander2></expander2>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the expander2 directive');
  }));
});
