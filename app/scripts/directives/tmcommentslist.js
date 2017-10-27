'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmcommentslist
 * @description
 * # tmcommentslist
 */
angular.module('luZhouApp')
  .directive('tmCommentsList', function () {
    return {
      templateUrl: 'components/tmCommentsList.html',
      restrict: 'EA',
      link: function postLink(scope, element, attrs) {
      }
    };
  });
