'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmRankingTab
 * @description
 * # tmRankingTab
 */
angular.module('luZhouApp')
  .directive('tmRankingTab', function () {
    return {
      templateUrl: 'components/tmRankingTab.html',
      restrict: 'EA',
      controller: function ($scope, commonService, $loading) {
        $scope.showRank = showRank;
        //单位排行
        $loading.start('rankingList');
        commonService.getData(ALL_PORT.LeftGroupRank.url, 'POST',
          $.extend({},ALL_PORT.LeftGroupRank.data,{rows:6}))
          .then(function(response) {
            $loading.finish('rankingList');
            $scope.govermentRanking = response.Data;
          });
        //个人学时排行  分平台
        commonService.getData(ALL_PORT.RankUserList.url, 'POST',
          $.extend({},ALL_PORT.RankUserList.data,{rows:6}) )
          .then(function(response) {
            $scope.ChilduserRankingData = response.Data;
          });

          
    $scope.params = ALL_PORT.RankUserList.data;
    $scope.RankUserList = function (options) {
       $loading.start('rankingList');
       $.extend($scope.params, options,{rows:5});
     // var params = $.extend({},ALL_PORT.RankGroupList.data,options)
      commonService.getData(ALL_PORT.RankUserList.url, 'POST',$scope.params )
        .then(function(response) {
          $loading.finish('rankingList');
          
          if($scope.params.BatchId == 10){
            $scope.userLeaderRankingDatas = response.Data;
          }else if($scope.params.BatchId == 7){
             $scope.UserproRankingData = response.Data;
          }else if($scope.params.BatchId == 11){
             $scope.UserModdelRankingDatas = response.Data;
          }
          // if (response.Data.ListData.length === 0) {
          //   $scope.paginationConf.totalItemss = 0;
          // } else {
          //   $scope.paginationConf.totalItems = response.Data.ViewBag.Count;
          // }
          
        });
    }
    $scope.RankUserList();




        //课程排行
        commonService.getData(ALL_PORT.CourseClickRank.url, 'POST',
          $.extend({},ALL_PORT.CourseClickRank.data,{rows:6}) )
          .then(function(response) {
            $scope.courseRankingData = response.Data;
          });
      },
      link: function postLink(scope, element, attrs) {
      }
    };
  });
