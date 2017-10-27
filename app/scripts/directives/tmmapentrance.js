'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmmapentrance
 * @description
 * # tmmapentrance
 */
angular.module('luZhouApp')
  .directive('tmMapEntrance', function () {
    return {
      templateUrl: 'components/tmMapEntrance.html',
      restrict: 'EA',
      link: function postLink(scope, element, attrs) {
      
      }
    };
  });
