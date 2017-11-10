'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmredbanner
 * @description
 * # tmredbanner
 */
angular.module('luZhouApp')
  .directive('tmRedBanner', function () {
    return {
      templateUrl: 'components/tmRedBanner.html',
      restrict: 'EA',
      link: function postLink(scope, element, attrs) {
      }
    };
  });
