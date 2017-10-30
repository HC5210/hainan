'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:category
 * @description
 * # category
 */
angular.module('luZhouApp')
  .directive('category', function () {
    return {
      templateUrl: 'components/category.html',
      restrict: 'EA',
      scope: {
        classifyData: "=",
        search: "=",
        name: "=",
        titleNav: "="
      },
      controller: function ($scope) {
        $scope.hasNodes = function (item) {
          // return !!item.children || !!item.children.length;
          return !!item.children;
        };
      },
      link: function (scope, element, attrs) {
        scope.startTree = function (data) {
          var id;
          setTimeout(function () {
            $("#category").tree({
              data: data,
              formatter: function (node) {
                if (node.text == "最新课程") {
                  return node.text + " &nbsp;<img src='/images/kcNew.gif'/>"
                } else if (node.text == "历年课程资源库") {
                  return node.text + " &nbsp;<span style='color: red;'>（不记录学时）</span>"
                } else {
                  return node.text
                }
              },
              onSelect: function (node) {
                if (id == node.id) return;
                id = node.id;
                if (scope.name == "course") {
                  scope.search({channelId: id,channelType:node.Type,topicType:node.TopicType,flag: 'all', title: '', sort: 'Sort', order: 'desc', courseType: 'All', teacher: '', page: 1});
                } else if (scope.name === 'book') {
                  scope.search({categoryId: id, ptitle: node.text, title: '', page: 1});
                } else if (scope.name === 'article') {
                  scope.search({categoryId: id, search: '', page: 1, CategoryCode: ''});
                } else if (scope.name === 'class') {
                  scope.search({categoryId: id, page: 1, title: "", type: "just"});
                }
              }
            });
          },100);
        };
        scope.$watch('classifyData', function (newVlaue) {
          scope.startTree(newVlaue);
        });
      }
    };
  });
