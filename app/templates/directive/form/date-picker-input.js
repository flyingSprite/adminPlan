'use strict';

define('date-picker-attr', ['adminApp'], function(adminApp) {
  //https://docs.angularjs.org/api/ng/service/$parse
  adminApp.directive('datePickerAttr', ['$parse', function () {
    return {
      require: '?ngModel',
      restrict: 'A',
      scope: {
        ngModel: '='
      },
      controller: ['$scope', function() {
      }],
      link: function($scope, element, attr, ngModel){
        // Specify how UI should be updated
        ngModel.$render = function() {
          element.val(ngModel.$viewValue || '');
        };
        // Listen for change events to enable binding
        element.on('blur keyup change', function() {
          $scope.$apply(read);
        });
        read(); // initialize
        // Write data to the model
        function read() {
          var val = element.val();
          ngModel.$setViewValue(val);
        }
        $(element).datetimepicker({
          format: 'YYYY-MM-DD hh:mm:ss'
        });
        // element.upload({
        //   success: function(data) {
        //     $parse(attr['ngModel']).assign($scope, data);
        //     $scope.$apply();
        //   },
        // });
      }
    };
  }]);
});