'use strict';
apDirective.directive('apItemArticle', function () {
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
    controller: function ($scope) {
      console.log($scope.img);
    }
  };
});
