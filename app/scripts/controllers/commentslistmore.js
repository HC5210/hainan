'use strict';

/**
 * @ngdoc function
 * @name luZhouApp.controller:CommentslistmoreCtrl
 * @description
 * # CommentslistmoreCtrl
 * Controller of the luZhouApp
 */
angular.module('luZhouApp')
  .controller('CommentsListMoreCtrl', function ($scope, $rootScope, $cookieStore, commonService, $timeout, $loading, $stateParams) {
    var categoryCode = $stateParams.categoryCode?$stateParams.categoryCode:'';
    var search = $stateParams.title?$stateParams.title:'';
    //分页
    var params = {
      page:1,
      rows:15,
      categoryId:'',
      CategoryCode:categoryCode,
      sort:'Sort',
      order:'desc',
      wordLimt:'20',
      titleNav:'新闻中心',
      search:search
    };
    $scope.paginationConf = $.extend({},paginationConf,{itemsPerPage: 15});
    $scope.refreshList = function (options) {
      // $loading.start('articleList');
      commonService.getData(ALL_PORT.CourseCommentList.url, 'POST',
         $.extend(params,options))
        .then(function(response) {
          $scope.courseCommlast=response.Data.CommentList;
          $scope.paginationConf.totalItems = response.Data.TotalCount;
        });
    };
     $scope.$watch('paginationConf.currentPage', function() {
      var pageOptions = {
        page: $scope.paginationConf.currentPage
      };
      $scope.refreshList(pageOptions);
    });
    //课程分类
    // commonService.getData(ALL_PORT.CourseCategory.url, 'POST', ALL_PORT.CourseCategory.data)
    //   .then(function (response) {
    //     $loading.finish('courseClassify');
    //     $scope.courseClassify = response.Data;
    //   });
        
  });
