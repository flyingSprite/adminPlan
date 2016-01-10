define(['adminApp', 'marked', 'angular', 'angular-ui-router'], function (adminApp, marked) {

  adminApp.service('InitService', function ($http){

    this.config = function () {
      return $http({method: 'GET', url: '/config.json'});
    };
  })
  .directive('markd', function () {
    return {
      restrict: 'E',
      replace: true,
      scope: {
        markurl: '@'
      },
      template: '<div ng-bind-html="markdownHtml"></div>',
      controller: function ($scope, $sce, $http) {
        $http.get($scope.markurl)
          .success(function(data) {
            console.log($scope.markurl);
            console.log(data);
            $scope.markdownHtml = $sce.trustAsHtml(marked(data));
            console.log($scope.markdownHtml);
          });
      }
    }
  });

});