'use strict';

define('label-wrapper', ['adminApp'], function(adminApp) {

  adminApp.directive('apLabelWrapper', function () {
    return {
      restrict: 'E',
      scope: {
        label: '@',
        for: '@'
      },
      template: '<div class="form-group">'
        + '  <div class="col-md-2 col-sm-3 col-xs-4">'
        + '    <label class="control-label" for="{{ for }}"'
        + '           style="line-height: 30px">{{ label }}</label>'
        + '  </div>'
        + '  <div class="col-md-10 col-sm-9 col-xs-8" ng-transclude></div>'
        + '</div>',
      transclude: true,
      controller: ['$scope', function($scope) {
        if ($scope.label === undefined || $scope.label === '') {
          $scope.label = 'Default label';
          console.warn('Please set ap-label-wrapper element label argument value.');
        }
      }]
    };
  });
});