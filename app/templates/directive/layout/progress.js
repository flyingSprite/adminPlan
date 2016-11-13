
define('layout-progress', ['adminApp'], function(adminApp) {
  adminApp.directive('apProgress', function() {
    return {
      restrict: 'E',
      scope: {
        progress: '='
      },
      template: '<div class="progress">'
      + '<div class="progress-bar" role="progressbar" aria-valuenow="{{progress}}" aria-valuemin="0" aria-valuemax="100" style="width: {{progress}}%;">'
      + '{{progress}}%</div>'
      + '</div>'
    };
  });
});
