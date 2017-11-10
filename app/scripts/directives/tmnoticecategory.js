'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmNoticeCategory
 * @description
 * # tmNoticeCategory
 */
angular.module('luZhouApp')
  .directive('tmNoticeCategory', function () {
    return {
      templateUrl: 'components/tmNoticeCategory.html',
      restrict: 'EA',
      link: function postLink(scope, element, attrs) {}
    };
  });
