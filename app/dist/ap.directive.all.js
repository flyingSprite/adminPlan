
// var apDirective = angular.module('ap.directive', []);

require([
  'angular-slimscroll',
  'horizontal',
  'item',
  'item-info',
  'item-news',
  'pagination',
  'label-wrapper'
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
      name: 'jquerySlimscroll',
      module: true,
      files: [
        'bower_components/jquery-slimscroll/jquery.slimscroll.min.js'
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
      link: ['$scope', 'element',
        function ($scope, element) {
          var $ = window.$;
          $(element).slimscroll({
            height: 'auto'
          });
        }
      ],
      controller: ['$scope', function() {
      }]
    };
  });
});

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
      controller: ['$scope', function () {
      }]
    };
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
      controller: ['$scope', function() {
        // console.log('test => ', $scope.img);
      }]
    };
  });
});
'use strict';

define('item-info', ['adminApp'], function(adminApp) {

  adminApp.directive('apItemInfo', function () {
    return {
      restrict: 'E',
      scope: {
        content: '@',
        date: '@'
      },
      template: '<div class="item-info item-info-light">'
        + '<Strong class="item-info-title">{{date}}</Strong>'
        + '<span>{{content}}</span>'
        + '</div>',
      controller: ['$scope', function($scope) {
        // console.log('test => ', $scope.img);
        if (!$scope.date) {
          $scope.date = '2016-07-01';
        }
        if ($scope.content) {
          $scope.content = 'Default content';
        }
      }]
    };
  });
});
'use strict';

define('item-news', ['adminApp'], function(adminApp) {

  adminApp.directive('apItemNews', function () {
    return {
      restrict: 'E',
      scope: {
        website: '@',
        websiteUrl: '@',
        name: '@',
        date: '@',
        newHref: '@'
      },
      template: '<div class="item-info item-info-light">'
        + '<span class="label label-primary">'
        + '<a class="shades-text text-white" href="{{ websiteUrl }}" target="_black">{{ website }}</a>'
        + '</span>'
        + '&nbsp;{{ date }}&nbsp;'
        + '<a href="{{ newHref }}" target="">{{ name }}</a>'
        + '</div>',
      controller: ['$scope', function() {
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
              arr.push('...');
              addArray(arr, totalPages - 1, totalPages);
            }

            else if (currentPage > totalPages - 4){
              addArray(arr, 1, 2);
              arr.push('...');
              addArray(arr, currentPage - 1, totalPages);
            }
            else {
              addArray(arr, 1, 2);
              arr.push('...');
              addArray(arr, currentPage - 1, currentPage + 1);
              arr.push('...');
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
    };
  });
});

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