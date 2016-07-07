
// var apDirective = angular.module('ap.directive', []);

require([
  'angular-slimscroll',
  'horizontal',
  'item',
  'pagination'
]);



'use strict';

define('angular-slimscroll', ['adminApp'], function(adminApp) {

  adminApp
  /**
   here: http://www.tuicool.com/articles/3Mbi2y6
   angular.constant() for inject the apply js file.
   */
  .constant('jquerySlimscroll', [
    {
      name:"jquerySlimscroll",
      module:true,
      files:[
        "bower_components/jquery-slimscroll/jquery.slimscroll.min.js"
      ]
    }
  ])
  .directive('apSlimscroll', function () {
    return {
      restrict: 'ACE',
      scope: {
        content: '@'
      },
      transclude: true,
      template: '<div class="ap-slimscroll-content" ng-transclude><div>',
      link: ['$scope', 'element', 'attrs',
        function ($scope, element, attrs) {
          $(element).slimscroll({
            height: 'auto'
          });
        }
      ],
      controller: ['$scope', function ($scope) {
      }]
    };
  });
})


'use strict';

define('horizontal', ['adminApp'], function(adminApp) {

  adminApp.directive('apHorizontal', function () {
    return {
      restrict: 'ACE',
      scope: {
        img: '@',
        content: '@'
      },
      // template: '<div ng-bind-html="markdownHtml"></div>',
      templateUrl: 'templates/directive/horizontal/index.html',
      controller: ['$scope', function ($scope) {
      }]
    }
  });
});



'use strict';

define('item', ['adminApp'], function(adminApp) {

  adminApp.directive('apItemArticle', function () {
    return {
      restrict: 'E',
      scope: {
        title: '@',
        url: '@',
        content: '@',
        img: '@',
        author: '@',
        date: '@',
        comment: '@',
        authorUrl: '@'
      },
      templateUrl: '/templates/directive/item/index.html',
      controller: ['$scope', function ($scope) {
        // console.log('test => ', $scope.img);
      }]
    };
  });
});
'use strict';

define('pagination', ['adminApp'], function(adminApp) {
  adminApp.directive('apPaginate', function () {
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
});
