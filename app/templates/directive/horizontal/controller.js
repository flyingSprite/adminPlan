'use strict';

define('horizontal', ['adminApp'], function(adminApp) {

  adminApp.directive('apHorizontal', function () {
    return {
      restrict: 'ACE',
      scope: {
        img: '@',
        content: '@'
      },
      // template: '<div ng-bind-html="markdownHtml"></div>',
      templateUrl: 'templates/directive/horizontal/index.html',
      controller: ['$scope', function () {
      }]
    };
  });
});


