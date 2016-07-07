'use strict';

define('item', ['adminApp'], function(adminApp) {

  adminApp.directive('apItemArticle', function () {
    return {
      restrict: 'E',
      scope: {
        title: '@',
        url: '@',
        content: '@',
        img: '@',
        author: '@',
        date: '@',
        comment: '@',
        authorUrl: '@'
      },
      templateUrl: '/templates/directive/item/index.html',
      controller: ['$scope', function() {
        // console.log('test => ', $scope.img);
      }]
    };
  });
});