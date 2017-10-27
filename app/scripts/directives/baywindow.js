'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:baywindow
 * @description
 * # baywindow
 */
angular.module('luZhouApp')
  .directive('tmbayWindow', function () {
    return {
    	templateUrl: 'components/tmBayWindow.html',
      restrict: 'EA',
      link: function postLink(scope, element, attrs) {
       }
    };
  });
