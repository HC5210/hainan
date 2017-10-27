'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmbaywindow
 * @description
 * # tmbaywindow
 */
angular.module('luZhouApp')
  .directive('tmBayWindow', function () {
    return {
      templateUrl: 'components/tmBayWindow.html',
      restrict: 'EA',
      link: function postLink(scope, element, attrs) {
        
      }
    };
  });
