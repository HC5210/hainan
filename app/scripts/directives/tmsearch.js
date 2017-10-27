'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmsearch
 * @description
 * # tmsearch
 */
angular.module('luZhouApp')
  .directive('tmSearch', function () {
    return {
      templateUrl: 'components/tmSearch.html',
      restrict: 'EA',
      link: function postLink($scope, element, attrs) {
       
      }
    };
  });
