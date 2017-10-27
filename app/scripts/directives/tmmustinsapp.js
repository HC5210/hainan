'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tminteractivecomments
 * @description
 * # tminteractivecomments
 */
angular.module('luZhouApp')
  .directive('tmInteractiveComments', function () {
    return {
      templateUrl: 'components/tmInteractiveComments.html',
      restrict: 'EA',
      link: function postLink(scope, element, attrs) {
        
      }
    };
  });

