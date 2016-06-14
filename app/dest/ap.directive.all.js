
var apDirective = angular.module('ap.directive', []);

'use strict';

apDirective.directive('apHorizontal', function () {
  return {
    restrict: 'ACE',
    scope: {
      img: '@',
      content: '@'
    },
    // template: '<div ng-bind-html="markdownHtml"></div>',
    templateUrl: 'templates/directive/horizontal/index.html',
    controller: function ($scope) {
      console.log($scope.img);
      console.log($scope.content)
    }
  }
});

'use strict';
apDirective.directive('apItemArticle', function () {
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
    // template: `
    //   <article class="item-article">
    //     <div class="item-article-content">
    //       <div class="item-article-link">
    //         <img style="-webkit-user-select: none; cursor: zoom-in;" src="{{ img }}">
    //       </div>
    //       <div class="item-article-info">
    //         <h2 class="item-article-info-title">
    //           <a href="{{ url }}" target="_black" class="anim-link">{{ title }}</a>
    //         </h2>
    //         <div class="item-article-info-content">{{ content }}</div>
    //         <div class="item-article-pub-info">
    //           <div class="item-article-pub-info-author">
    //             <i class="fa fa-user"></i>
    //             <a href="{{ authorUrl }}" target="_black">{{ author }}</a>
    //             <span class="item-article-pub-info-separator">•</span>
    //           </div>
    //           <div class="item-article-pub-info-date">
    //             <i class="fa fa-clock-o"></i>
    //             <span>{{ date }}</span>
    //             <span class="item-article-pub-info-separator">•</span>
    //           </div>
    //           <div class="item-article-pub-info-comment">
    //             <i class="fa fa-commenting-o"></i>
    //             <span>{{ comment }}</span>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </article>
    // `,
    controller: function ($scope) {
      console.log('test => ', $scope.img);
    }
  };
});

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
    controller: function ($scope) {
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
    }
  }
});
