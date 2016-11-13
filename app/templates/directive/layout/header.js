
define('layout-header', ['adminApp'], function(adminApp) {
  adminApp.directive('apHeaderNormal', function() {
    return {
      restrict: 'E',
      scope: {
        title: '@'
      },
      transclude: true,
      template: '<div class="header-normal">{{title}}</div>'
    };
  });
});
