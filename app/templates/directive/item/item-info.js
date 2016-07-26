'use strict';

define('item-info', ['adminApp'], function(adminApp) {

  adminApp.directive('apItemInfo', function () {
    return {
      restrict: 'E',
      scope: {
        content: '@',
        date: '@'
      },
      template: '<div class="item-info item-info-light">'
        + '<Strong class="item-info-title">{{date}}</Strong>'
        + '<span>{{content}}</span>'
        + '</div>',
      controller: ['$scope', function($scope) {
        // console.log('test => ', $scope.img);
        if (!$scope.date) {
          $scope.date = '2016-07-01';
        }
        if ($scope.content) {
          $scope.content = 'Default content';
        }
      }]
    };
  });
});