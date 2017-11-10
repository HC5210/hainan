'use strict';

/**
 * @ngdoc function
 * @name luZhouApp.controller:ArticleCtrl
 * @description
 * # ArticleCtrl
 * Controller of the luZhouApp
 */
angular.module('luZhouApp')
  .controller('ArticleCtrl', function ($scope, $state, $rootScope, $cookieStore, commonService, $stateParams, $loading) {
    var categoryCode = $stateParams.categoryCode?$stateParams.categoryCode:'';
    var search = $stateParams.title?$stateParams.title:'';
    var categoryId = $stateParams.categoryId?$stateParams.categoryId:'';
    if(categoryId&&categoryCode){
      categoryCode="";
    }
    var parentId = "23";
    var titleNav = "新闻中心";
    if(categoryCode == "学习要求" || categoryCode == "联系我们" || categoryCode == "使用说明" || categoryCode == "在线帮助"){
      parentId = "4";
      titleNav = "在线帮助";
    }else{
      parentId = "23";
      titleNav = "新闻中心";
    }
    //获取文章分类
    commonService.getData(ALL_PORT.ArticleCategory.url, 'POST',
      $.extend({}, ALL_PORT.ArticleCategory.data,{parentId:parentId,titleNav:titleNav}))
      .then(function (response) {
        $scope.categoryData = response.Data.ListData;
        $scope.categoryTitle = response.Data.TitleNav;
      });

    //分页
    var params = {
      page:1,
      rows:15,
      categoryId:categoryId,
      CategoryCode:categoryCode,
      sort:'Sort',
      order:'desc',
      wordLimt:'20',
      titleNav:'新闻中心',
      search:search
    };
    $scope.paginationConf = $.extend({},paginationConf,{itemsPerPage: 15});
    $scope.refreshList = function (options) {
      $loading.start('articleList');
      commonService.getData(ALL_PORT.ArticleList.url,'POST',
        $.extend(params,options))
        .then(function(response) {
          $loading.finish('articleList');
          $scope.articleListData = response.Data;
          $scope.paginationConf.totalItems = response.Data.Count;
        });
    };
    $scope.$watch('paginationConf.currentPage', function() {
      var pageOptions = {
        page: $scope.paginationConf.currentPage
      };
      $scope.refreshList(pageOptions);
    });

  });
