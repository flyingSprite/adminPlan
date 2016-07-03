'use strict';

apDirective.directive('apHorizontal', function () {
  return {
    restrict: 'ACE',
    scope: {
      img: '@',
      content: '@'
    },
    // template: '<div ng-bind-html="markdownHtml"></div>',
    templateUrl: 'templates/directive/horizontal/index.html',
    controller: ['$scope', function ($scope) {
    }]
  }
});
