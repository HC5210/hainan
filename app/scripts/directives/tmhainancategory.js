'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmfeaturehainan
 * @description
 * # tmfeaturehainan
 */
angular.module('luZhouApp')
  .directive('tmHainanCategory', function () {
    return {
      templateUrl: 'components/tmHainanCategory.html',
      restrict: 'EA',
      link: function postLink(scope, element, attrs) {
      }
    };
  });
