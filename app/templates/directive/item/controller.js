'use strict';
apDirective.directive('apItemArticle', function () {
  return {
    restrict: 'E',
    scope: {
      titleImg: '@',
      content: '@',
      title: '@',
      titleUrl: '@'
    },
    templateUrl: '/templates/directive/item/index.html',
    controller: function ($scope) {
      console.log('article item.');
    }
  };
});
