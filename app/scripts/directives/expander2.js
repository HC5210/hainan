'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:expander2
 * @description
 * # expander2
 */
angular.module('luZhouApp')
  .directive('expander2', function () {
    return {
      templateUrl: 'components/expander2.html',
      restrict:'EA',
      transclude:true,
      scope:{
        title:'=expanderTitle',
        categoryId:'=categoryId',
      },
      link:function(scope,element,attrs){
        scope.showMe=true;
        scope.toggle=function toggle(){
          scope.showMe=!scope.showMe;
        }
      }
    };
  });
