
/**
 * Design Card
 *
 * @author Quesle
 * @github Quesle
 * @email zrwuxian@126.com
 */
define('layout-card', ['adminApp'], function(adminApp) {
  adminApp.directive('apComponent', function () {
    return {
      restrict: 'E',
      scope: {
        componentName: '@',
        className: '@',
        code: '@'
      },
      transclude: true,
      template: '<div class="row">'
      + '<div class="col-lg-12 col-md-12 col-sm-12 field-line">'
      + '<div class="col-lg-2 col-md-2 col-sm-2"><strong>Component:</strong></div>'
      + '<div class="col-lg-10 col-md-10 col-sm-10">{{componentName}}</div></div>'
      + '<div class="col-lg-12 col-md-12 col-sm-12 field-line">'
      + '<div class="col-lg-2 col-md-2 col-sm-2"><strong>Class Name:</strong></div>'
      + '<div class="col-lg-10 col-md-10 col-sm-10">{{className}}</div></div>'
      + '<div class="col-lg-12 col-md-12 col-sm-12 field-line">'
      + '<div class="col-lg-2 col-md-2 col-sm-2"><strong>Code:</strong></div>'
      + '<div class="col-lg-10 col-md-10 col-sm-10">{{code}}</div></div>'
      + '</div>'
    };
  })
  .directive('apCard', function () {
    return {
      restrict: 'E',
      scope: {},
      transclude: true,
      template: '<div class="card-sample normal-font" ng-transclude></div>'
    };
  })
  .directive('apCardRadius', function() {
    return {
      restrict: 'E',
      scope: {},
      transclude: true,
      template: '<div class="card-sample-radius" ng-transclude></div>'
    };
  });
});
