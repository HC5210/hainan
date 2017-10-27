'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmartnotice
 * @description
 * # tmartnotice
 */
angular.module('luZhouApp')
  .directive('tmArtNotice', function () {
    return {
      templateUrl: 'components/tmArtNotice.html',
      restrict: 'EA',
       controller: function ($scope, $state, $rootScope, $cookieStore, commonService, $stateParams, $loading) {
        var categoryCode = $stateParams.categoryCode?$stateParams.categoryCode:'新闻中心';
	    var search = $stateParams.title?$stateParams.title:'';
	    var parentId = "";
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
            $scope.categoryData = response.Data;
          });
	}
  }
})
  ;
