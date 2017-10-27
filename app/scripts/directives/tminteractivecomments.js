
'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmmustinsapp
 * @description
 * # tmmustinsapp
 */
angular.module('luZhouApp')
  .directive('tmMustInsApp', function () {
    return {
      templateUrl: 'components/tmMustInsApp.html',
      restrict: 'EA',
      link: function postLink(scope, element, attrs) {
       }
    };
  });
