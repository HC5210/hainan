'use strict';

/**
 * @ngdoc function
 * @name luZhouApp.controller:RankgroupCtrl
 * @description
 * # RankgroupCtrl
 * Controller of the luZhouApp
 */
angular.module('luZhouApp')
  .controller('RankgroupCtrl', function ($scope, $rootScope, $cookieStore, commonService, $timeout, $loading, $stateParams) {
    $scope.vmtab={};
    //用户学时排行
    $scope.params = ALL_PORT.RankGroupList.data;
   
    $scope.getGroupRanking = function (options) {
       $loading.start('rankingDetail');
       $.extend($scope.params, options);
     // var params = $.extend({},ALL_PORT.RankGroupList.data,options)
      commonService.getData(ALL_PORT.RankGroupList.url, 'POST',$scope.params )
        .then(function(response) {
          $loading.finish('rankingDetail');
          
          if($scope.params.BatchId == 10){
            $scope.govermentproRanking = response.Data;
          }else if($scope.params.BatchId == 7){
             $scope.govermentLeaderRanking = response.Data;
          }else if($scope.params.BatchId == 11){
             $scope.govermentModdelRanking = response.Data;
          }
          if (response.Data.ListData.length === 0) {
            $scope.paginationConf.totalItems = 0;
          } else {
            $scope.paginationConf.totalItems = response.Data.ViewBag.Count;
          }
          
        });
    }
    $scope.getGroupRanking();

    $scope.paginationConf = $.extend({},paginationConf,{itemsPerPage: ALL_PORT.RankGroupList.data.rows});

    //分页
    // 通过$watch currentPage 当他们一变化的时候，重新获取数据条目
    $scope.$watch('paginationConf.currentPage', function() {
      var pageOptions = {
        page: $scope.paginationConf.currentPage
      };
      $scope.getGroupRanking(pageOptions);
    });
  });
