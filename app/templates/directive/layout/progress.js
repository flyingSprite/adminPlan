
define('layout-progress', ['adminApp'], function(adminApp) {
  console.log('asdfasdfasdf');
  adminApp.directive('apProgress', function() {
    return {
      restrict: 'E',
      scope: {
        progress: '='
      },
      template: '<div class="progress">'
      + '<div class="progress-bar" role="progressbar" aria-valuenow="{{progress}}" aria-valuemin="0" aria-valuemax="100" style="width: {{progress}}%;">'
      + '{{progress}}%</div>'
      + '</div>',
      controller: ['$scope', function($scope) {
        console.log($scope.progress);
        $scope.$watch(function() {
          return $scope.progress;
        }, function(){
          console.log($scope.progress);
        });
        console.log($scope);
        console.log($scope.$parent);
      }]
    };
  });
});
