'use strict';
/**
 * @ngdoc function
 * @name luZhouApp.controller:SpeciallearningCtrl
 * @description
 * # SpeciallearningCtrl
 * Controller of the luZhouApp
 */
angular.module('luZhouApp')
  .controller('SpeciallearningCtrl', function ($scope, $http, commonService, $location, $loading) {
    $scope.showImage = false;
    //专题学习
    $scope.showNoSpecialClass = false;
    commonService.getData(ALL_PORT.StudySpecial.url, 'POST',
      $.extend({}, ALL_PORT.StudySpecial.data, {rows: 0}))
      .then(function (response) {
        $scope.studySpecialData = response.Data;
        $scope.showNoSpecialClass = response.Data.ListData.length == 0 ? true : false;
        // if($scope.studySpecialData.ListDataTopics.Type=='required'){
        //   $scope.showImage= ture;
        // }else{
        //   $scope.showImage= false;
        // }
      });
      //课程分类
          commonService.getData(ALL_PORT.CourseCategory.url, 'POST', ALL_PORT.CourseCategory.data)
            .then(function (response) {
              $scope.courseClassify = response.Data.ListData;
            });
  });
