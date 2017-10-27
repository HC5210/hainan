'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmrealdata
 * @description
 * # tmrealdata
 */
angular.module('luZhouApp')
  .directive('tmrealdata', function () {
    return {
      templateUrl: 'components/tmRealTimeData.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the tmrealdata directive');
      }
    };
  });
