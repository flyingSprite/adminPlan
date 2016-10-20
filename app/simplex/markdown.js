define([
  'adminApp',
  'marked',
  'highlightjs'
], function (adminApp, marked, hljs) {

  adminApp.directive('markd', function () {
    return {
      restrict: 'E',
      replace: true,
      scope: {
        markurl: '@',
        markData: '@'
      },
      template: '<div ng-bind-html="markdownHtml"></div>',
      controller: ['$scope', '$sce', '$http', function ($scope, $sce, $http) {
        marked.setOptions({
          highlight: function (code) {
            return hljs.highlightAuto(code).value;
          }
        });
        if ($scope.markData != undefined) {
          $scope.markdownHtml = $sce.trustAsHtml(marked($scope.markData));
          $scope.$watch(function () {
            return $scope.markData;
          }, function () {
            $scope.markdownHtml = $sce.trustAsHtml(marked($scope.markData));
          });
        }

        if($scope.markData == undefined || $scope.markurl != undefined){
          $http.get($scope.markurl)
            .success(function(data) {
              $scope.markdownHtml = $sce.trustAsHtml(marked(data));
            });
        }
      }]
    };
  });
});
