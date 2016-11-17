
define('form-multi-edit-input', ['adminApp'], function(adminApp) {
  adminApp.directive('apMultiEditInput', function() {
    return {
      restrict: 'E',
      scope: {
        ngModel: '=',
        ngValidate: '='
      },
      transclude: true,
      template:
        '<div class="form-group">'
        + '<div class="input-group">'
          + '<input type="text" class="form-control" ng-model="inputValue">'
          + '<span class="input-group-btn">'
            + '<button type="button" class="btn btn-primary" ng-disabled="!isValid(inputValue)" ng-click="addNewItem()"><i class="fa fa-plus"></i></button>'
            + '<button type="button" class="btn btn-danger" ng-disabled="!selectedValue" ng-click="deleteItem()"><i class="fa fa-trash-o"></i></button>'
          + '</span>'
        + '</div>'
      + '</div>'
        + '<div class="form-group">'
          + '<select class="form-control" ng-model="selectedValue" multiple="4">'
            + '<option ng-if="ngModel.length > 0" ng-repeat="item in ngModel" value="{{ item }}">{{ item }}</option>'
          + '</select>'
        + '</div>'
      + '</div>',
      controller: ['$scope', 'validator', function($scope, validator) {
        if (!$scope.ngModel) {
          $scope.ngModel = [];
        }

        $scope.addNewItem = function() {
          if ($scope.isValid($scope.inputValue)) {
            if ($scope.ngModel.indexOf($scope.inputValue) === -1) {
              $scope.ngModel.push($scope.inputValue);
            }
            $scope.inputValue = '';
          }
        };

        $scope.isValid = function(value) {
          if (angular.isArray($scope.ngValidate)) {
            for (var i in $scope.ngValidate) {
              var command = $scope.ngValidate[i];
              if (angular.isString(command) && !validator(command, value)) {
                return false;
              }
            }
          } else if (angular.isString($scope.ngValidate)) {
            if (!validator($scope.ngValidate, value)) {
              return false;
            }
          }
          return true;
        };
        $scope.deleteItem = function() {
          for (var i in $scope.selectedValue) {
            var value = $scope.selectedValue[i];
            for(var index = 0, n = 0; i < $scope.ngModel.length; i++) {
              if($scope.ngModel[index] != value) {
                $scope.ngModel[n++] = $scope.ngModel[i];
              }
            }
            $scope.ngModel.length > 0 && ($scope.ngModel.length -= 1);
            console.log($scope.ngModel);
          }

        };
      }]
    };
  });
});
