
define('layout-tab', ['adminApp', function(adminApp) {
  adminApp.directive('apTabContext', function() {
    return {
      restrict: 'E',
      scope: {},
      transclude: true,
      template: ''
    };
  })
  .directive('apTab', function() {
    return {
      restrict: 'E',
      scope: {},
      transclude: true,
      template: ''
    };
  });
}]);
