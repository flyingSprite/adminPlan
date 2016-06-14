'use strict';

apDirective.directive('apPaginate', function () {
  return {
    restrict: 'ACE',
    scope: {
      total: '@',
      page: '@',
      size: '@',
      click: '='
    },
    // template: '<div ng-bind-html="markdownHtml"></div>',
    templateUrl: 'templates/directive/pagination/index.html',
    controller: ['$scope', function ($scope) {
      $scope.currentPage = $scope.page;
      $scope.totalPages = $scope.size;

      $scope.toPage = function (num) {
        click(num);
      };

      $scope.prevPage = function () {
        var currentPage = $scope.currentPage - 1;
        currentPage = currentPage < 1 ? 1 : currentPage;
        click(currentPage);
      };

      $scope.nextPage = function () {
        var currentPage = parseInt($scope.currentPage) + 1;
        currentPage = currentPage > $scope.totalPages ? $scope.totalPages : currentPage;
        click(currentPage);
      };

      $scope.getNumber = function () {
        var totalPages = parseInt($scope.totalPages);
        var currentPage = parseInt($scope.currentPage);
        var arr = [];
        if (totalPages <= 9) {
          return addArray(arr, 1, totalPages);
        } else {
          if ( currentPage <= 4) {
            addArray(arr, 1, currentPage + 1);
            arr.push('...')
            addArray(arr, totalPages - 1, totalPages);
          }

          else if (currentPage > totalPages - 4){
            addArray(arr, 1, 2);
            arr.push('...')
            addArray(arr, currentPage - 1, totalPages);
          }
          else {
            var arr = [];
            addArray(arr, 1, 2);
            arr.push('...')
            addArray(arr, currentPage - 1, currentPage + 1);
            arr.push('...')
            addArray(arr, totalPages - 1, totalPages);
          }
          return arr;
        }
      };

      $scope.$watch(function () { return $scope.page; }, function() {
        initPager();
      });

      $scope.$watch(function () { return $scope.total; }, function() {
        initPager();
      });

      $scope.$watch(function () { return $scope.size; }, function() {
        initPager();
      });

      function initPager() {
        var total = $scope.total;
        var size = $scope.size;
        $scope.currentPage = $scope.page;
        $scope.totalPages = total % size > 0 ? parseInt(total / size) + 1 : total / size;
      }

      function click(pageNumber) {
        if ($scope.click) {
          $scope.click(pageNumber);
        }
      }

      function addArray(arr, start, end) {
        for (start; start <= end; start ++) {
          arr.push(start);
        }
        return arr;
      }
    }]
  }
});
