'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmArticleCategory
 * @description
 * # tmArticleCategory
 */
angular.module('luZhouApp')
  .directive('tmArticleCategory', function () {
    return {
      templateUrl: 'components/tmArticleCategory.html',
      restrict: 'EA',
      scope:{
        categoryData:'='
      },
      link: function postLink(scope, element, attrs) {
      }
    };
  });
