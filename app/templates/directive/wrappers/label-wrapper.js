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
        + '  <div class="col-md-4 col-sm-4 col-xs-4">'
        + '    <label class="control-label" for="{{ for }}"'
        + '           style="line-height: 30px">{{ label }}</label>'
        + '  </div>'
        + '  <div class="col-md-8 col-sm-8 col-xs-8" ng-transclude></div>'
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