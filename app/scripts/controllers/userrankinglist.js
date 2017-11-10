'use strict';

/**
 * @ngdoc function
 * @name luZhouApp.controller:UserrankinglistCtrl
 * @description
 * # UserrankinglistCtrl
 * Controller of the luZhouApp
 */
angular.module('luZhouApp')
  .controller('UserrankinglistCtrl', function ($scope, $rootScope, $cookieStore, commonService, $timeout, $loading, $stateParams) {
    //防伪造请求
    $scope.showRank = showRank;
    $scope.vmusertab={};
    $scope.token = commonService.AntiForgeryToken();
    //用户学时排行

    // $loading.start('userRankingList');
    // $scope.getUserRanking = function (options) {
    //   var params = $.extend({},ALL_PORT.RankUserList.data,options)
    //   commonService.getData(ALL_PORT.RankUserList.url, 'POST',params )
    //     .then(function(response) {
    //       $loading.finish('userRankingList');
    //       $scope.paginationConf.totalItems = response.Data.ViewBag.Count;
    //       $scope.userRankingData = response.Data;
    //     });
    // }
        
    $scope.params = ALL_PORT.RankUserList.data;
   
    $scope.getUserRanking = function (options) {
       $loading.start('userRankingList');
       $.extend($scope.params, options);
     // var params = $.extend({},ALL_PORT.RankGroupList.data,options)
      commonService.getData(ALL_PORT.RankUserList.url, 'POST',$scope.params )
        .then(function(response) {
          $loading.finish('userRankingList');
          if($scope.params.BatchId == 10){
            $scope.userLeaderRankingData = response.Data;
          }else if($scope.params.BatchId == 7){
             $scope.UserproRankingData = response.Data;
          }else if($scope.params.BatchId == 11){
             $scope.UserModdelRankingData = response.Data;
          }
          if (response.Data.ListData.length === 0) {
            $scope.paginationConf.totalItems = 0;
          } else {
            $scope.paginationConf.totalItems = response.Data.ViewBag.Count;
          }
          
        });
    }
    $scope.getUserRanking();

    //个人学时排行  分平台
        commonService.getData(ALL_PORT.RankUserList.url, 'POST',
          $.extend({},ALL_PORT.RankUserList.data,{rows:15}) )
          .then(function(response) {
            $scope.ChilduserRankingData = response.Data;
            $scope.paginationConf.totalItems = response.Data.ViewBag.Count;
          });

    $scope.paginationConf = $.extend({},paginationConf,{itemsPerPage: ALL_PORT.RankUserList.data.rows});

    //分页
    // 通过$watch currentPage 当他们一变化的时候，重新获取数据条目
    $scope.$watch('paginationConf.currentPage', function() {
      var pageOptions = {
        page: $scope.paginationConf.currentPage
      };
      $scope.getUserRanking(pageOptions);
    });
  });
