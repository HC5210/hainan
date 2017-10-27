'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmcourseclassifycenter
 * @description
 * # tmcourseclassifycenter
 */
angular.module('luZhouApp')
  .directive('tmCourseClassifyCentner', function () {
    return {
      templateUrl: 'components/tmCourseClassifyCentner.html',
      restrict: 'EA',
      link: function postLink(scope, element, attrs) {
      }
    };
  });
