'use strict';

/**
 * @ngdoc function
 * @name luZhouApp.controller:NewscenterCtrl
 * @description
 * # NewscenterCtrl
 * Controller of the luZhouApp
 */
angular.module('luZhouApp')
  .controller('FeaturehainanCtrl', function ($scope, $rootScope, $cookieStore, commonService, $timeout, $loading, $stateParams) {
   	$scope.showInput1 = true;
    $scope.showInput2 = false;
    $scope.showInput3 = false;
    //是否是调用推荐课程接口
    $scope.recommendApi = false;
    //显示loading
    $loading.start('courseClassify');
    
    //课程分类
    // commonService.getData(ALL_PORT.CourseCategory.url, 'POST', ALL_PORT.CourseCategory.data)
    //   .then(function (response) {
    //     $loading.finish('courseClassify');
    //     $scope.courseClassify = response.Data;
    //   });
      //特色海南
    commonService.getData(ALL_PORT.GetChannelInfoListFeature.url, 'POST', ALL_PORT.GetChannelInfoListFeature.data)
      .then(function (response) {
        $loading.finish('courseClassify');
        //console.log("12346"+response);
        $scope.featureHainai=response.Data;
      });
    
      //课程超市列表
    var searchText = $stateParams.title?$stateParams.title:'';
    var channelId = $stateParams.channelId?$stateParams.channelId:'';
    var channelType = $stateParams.channelType?$stateParams.channelType:'';
    var topicType=$stateParams.topicType?$stateParams.topicType:'';
    var teacher = '';
    var title = '';
    if($stateParams.searchType === "title"){
      title = searchText;
    }else if($stateParams.searchType === "teacher"){
      teacher = searchText;
    }

    //搜索
    $scope.selectText = [
      {name: '课程名称', id: '1'},
      {name: '课程类型', id: '2'},
      {name: '主讲人', id: '3'}
    ];
    $scope.timeLimitText = [
      {name: '不限', id: '0'},
      {name: '30分钟以下', id: '1'},
      {name: '30~60分钟之内', id: '2'},
      {name: '60分钟以上', id: '3'}
    ];
    $scope.videoType = [
      {name: '所有类型', id: 'All'},
      {name: '三分屏', id: 'ThreeScreenCourse'},
      {name: '单视频', id: 'SingleCourse'}
      // {name: '动画类', id: 'AnimationCourse'}
    ];
    var courseListParams = {
      page: 1,
      rows: 10,
      sort: 'Sort',
      order: 'desc',
      courseType: 'All',
      channelId: channelId,
      title: title,
      titleNav: "课程中心",
      wordLimt: 35,
      teacher: teacher,
      channelType:channelType,
      topicType:topicType,
      timeLimit:0,
    };
    $scope.paginationConf = $.extend({}, paginationConf, {itemsPerPage: courseListParams.rows});
    //搜索方法
    //搜索方法
    $scope.searchCourse = function (options, isOrder) {
      $loading.start('courseSupermarket');
      if (isOrder) {
        if (courseListParams.order == 'desc') {
          courseListParams.order = 'Asc';
        } else if (courseListParams.order == 'Asc') {
          courseListParams.order = 'desc';
        }
      } else {
        courseListParams.order = 'desc';
      }
      var params = {};
      if ($scope.selectedName == "1") {
        $.extend(params, {teacher: '', title: $scope.searchTitle, courseType: $scope.selectedType,timeLimit:$scope.timeLimit}, options);
      } else if ($scope.selectedName == "2") {
        $.extend(params, {teacher: '', title: $scope.searchTitle, courseType: $scope.selectedType,timeLimit:$scope.timeLimit}, options);
      } else if ($scope.selectedName == "3") {
        $.extend(params, {teacher: $scope.searchTeacher, title: "", courseType: $scope.selectedType,timeLimit:$scope.timeLimit}, options);
      }
    
      $scope.recommendApi = false;
      $.extend(courseListParams, params);
      $scope.paginationConf.currentPage = courseListParams.page;
      commonService.getData(ALL_PORT.CourseList.url, 'POST', courseListParams)
        .then(function (response) {
          $loading.finish('courseSupermarket');
          $scope.courseSupermarketData = response.Data;
          $scope.paginationConf.totalItems = response.Data.Count;
        });
    };
    $scope.judgement = function () {
      $scope.searchTitle = "";
      $scope.searchTeacher = "";
      $scope.selectedType = "All";
      if ($scope.selectedName == "1") {
        $scope.showInput1 = true;
        $scope.showInput2 = false;
        $scope.showInput3 = false;
      } else if ($scope.selectedName == "2") {
        $scope.showInput1 = false;
        $scope.showInput2 = true;
        $scope.showInput3 = false;
      } else if ($scope.selectedName == "3") {
        $scope.showInput1 = false;
        $scope.showInput2 = false;
        $scope.showInput3 = true;
      }
    }
    /*$scope.searchCourse = function (options) {
      $loading.start('courseSupermarket');
      $scope.recommendApi = false;
      $.extend(courseListParams, options);
      $scope.paginationConf.currentPage = courseListParams.page;
      commonService.getData(ALL_PORT.CourseList.url, 'POST', courseListParams)
        .then(function (response) {
          $loading.finish('courseSupermarket');
          $scope.courseSupermarketData = response.Data;
          $scope.paginationConf.totalItems = response.Data.Count;
          // if()
        });
    };
    $scope.judgement = function (id, courseType, sort, orders) {
      var order;
      if (orders) {
        if (courseListParams.order == 'desc') {
          order = 'Asc';
        } else if (courseListParams.order == 'Asc') {
          order = 'desc';
        }
      } else {
        order = 'desc';
      }
      if (id == 1) {
        $scope.showInput1 = true;
        $scope.showInput2 = false;
        $scope.showInput3 = false;
        if (courseType) {
          $scope.searchCourse({title: $scope.searchTitle1, courseType: courseType, order: order});
        } else if (courseType == null && sort) {
          $scope.searchCourse({title: $scope.searchTitle1, sort: sort, order: order});
        } else {
          $scope.searchCourse({channelId: '', title: $scope.searchTitle1, order: order, teacher: ''});
        }
      } else if (id == 2) {
        $scope.showInput1 = false;
        $scope.showInput2 = true;
        $scope.showInput3 = false;
        $scope.searchCourse({
          channelId: courseListParams.channelId,
          courseType: $scope.searchTitle2.id,
          sort: sort,
          order: order,
          teacher: '',
          title: $scope.searchTitle22
        });
      } else if (id == 3) {
        $scope.showInput1 = false;
        $scope.showInput2 = false;
        $scope.showInput3 = true;
        if (courseType) {
          $scope.searchCourse({title: $scope.searchTitle3, courseType: courseType, order: order})
        } else if (courseType == null && sort) {
          $scope.searchCourse({title: $scope.searchTitle1, sort: sort, order: order});
        } else {
          $scope.searchCourse({
            channelId: courseListParams.channelId,
            teacher: $scope.searchTitle3,
            order: order,
            title: '',
            courseType: 'All'
          });
        }
      }
    };*/
    //智能推荐
    $scope.getRecommendCourse = function (options) {
      $scope.recommendApi = true;
      $loading.start('courseSupermarket');
      commonService.getData(ALL_PORT.RecommendCourse.url, 'POST',
        $.extend({}, ALL_PORT.RecommendCourse.data, { page: 1, rows: 10 },options))
        .then(function(response) {
          $loading.finish('courseSupermarket');
          $scope.courseSupermarketData = response.Data;
          $scope.courseSupermarketData.ChannelName="智能推荐";
          $scope.paginationConf.totalItems = response.Data.Count;
          
          // console.log($scope.paginationConf);
        });
    }
    //分页
    // 通过$watch currentPage 当他们一变化的时候，重新获取数据条目
    $scope.$watch('paginationConf.currentPage', function () {
      var pageOptions = {
        page: $scope.paginationConf.currentPage,
      };
      if($scope.recommendApi){
        $scope.getRecommendCourse(pageOptions);
      }else {
        $scope.searchCourse(pageOptions);
      }
    });
    $scope.selectClass = {};
    //防伪造请求
    var token = commonService.AntiForgeryToken();

    //全选
    $scope.checkAll = function () {
      $(":checkbox").each(function () {
        if ($(this).attr("disabled") != "disabled") {
          $(this).prop("checked", true);
        } else {
        }
      });
    }
    //反选
    $scope.selectInvert = function () {
      $(":checkbox").each(function () {
        if ($(this).attr("disabled") != "disabled") {
          if (!$(this).prop("checked")) {
            $(this).prop("checked", true);
          } else {
            $(this).prop("checked", false);
          }
        } else {
        }
      });
    }
    //批量选课
    $scope.ckBatch = function (str, page, rows) {
      var checkedsub = $(".block1 input[type='checkbox'][name='subcheck']:checked").length; //获取选中的
      var checkValue = "";
      $(".block1 input[type='checkbox'][name='subcheck']:checked").each(function () {
        if ($(this).val() !== 0) {
          checkValue += $(this).val() + ",";
        }
      });
      $scope.selectClass.checkValue = checkValue;
      if (checkValue !== '') {
        commonService.getData(ALL_PORT.AddStudyCourse.url, 'POST', $.extend({}, ALL_PORT.AddStudyCourse.data, $scope.selectClass, token))
          .then(function (response) {
            if (response.Type > 0) {
              commonService.alertMs(response.Message);
              // location.reload();
              if($scope.recommendApi){
                $scope.getRecommendCourse();
              }else {
                $scope.searchCourse();
              }
            }
          });
      } else {
        commonService.alertMs("您没有选择可添加的课程！");
      }
    };


    //课程点击排行
    $loading.start('courseRankingList');
    commonService.getData(ALL_PORT.CourseClickRank.url, 'POST',
      $.extend({},ALL_PORT.CourseClickRank.data, {rows: 15}))
      .then(function (response) {
        $loading.finish('courseRankingList');
        $scope.courseRankingList = response.Data;
      });
  });
