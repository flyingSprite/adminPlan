'use strict';
/***
 * @link https://github.com/heavysixer/angular-will-paginate.git
 */
define(['adminApp'], function (adminApp) {

  adminApp
  .run(['$templateCache', function($templateCache){
    console.log('ccccccc');
    $templateCache.put('paginator.html',
      '<ul class="{{options.paginationClass}}">' +
      '  <li class="prev" ng-class="{true:\'disabled\'}[params.currentPage == 1]">' +
      '    <a ng-hide="params.currentPage == 1" ng-click="getPage(params.currentPage - 1)" class="ng-binding">{{options.previousLabel}}</a>' +
      '    <span ng-show="params.currentPage == 1" class="ng-binding ng-hide">{{options.previousLabel}}</span>' +
      '  </li>' +
      '  <li ng-class="{active:params.currentPage == page.value, disabled:page.kind == \'gap\' }" ng-repeat-start="page in collection">' +
      '    <span ng-show="params.currentPage == page.value || page.kind == \'gap\'">{{page.value}}</span>' +
      '    <a ng-hide="params.currentPage == page.value || page.kind == \'gap\'" ng-click="getPage(page.value)">{{page.value}}</a>' +
      '  </li>' +
      '  <li ng-repeat-end></li>' +
      '  <li class="next" ng-class="{true:\'disabled\'}[params.currentPage == params.totalPages]">' +
      '    <a ng-hide="params.currentPage == params.totalPages" ng-click="getPage(params.currentPage + 1)">{{options.nextLabel}}</a>' +
      '    <span ng-show="params.currentPage == params.totalPages">{{options.nextLabel}}</span>' +
      '  </li>' +
      '</ul>'
    );
  }])

  .directive('willPaginate', function() {
    return {
      restrict: 'ACE',
      templateUrl: 'paginator.html',
      scope: {
        params: '=',
        config: '=',
        onClick: '='
      },
      controller: ['$scope',
        function($scope) {
          $scope.getPage = function(num){
            if($scope.onClick){
              $scope.onClick(num);
            }
          };
        }
      ],
      link: function($scope) {
        $scope.collection = [];

        // This config option mimics the options here:
        // https://github.com/mislav/will_paginate/blob/master/lib/will_paginate/view_helpers.rb

        // NOTE: NOT ALL OPTIONS ARE IMPLEMENTED YET.
        /* Options
            :class -- CSS class name for the generated DIV (default: "pagination")
            :previousLabel -- default: "Previous"
            :nextLabel -- default: "Next"
            :innerWindow -- how many links are shown around the current page (default: 4)
            :outerWindow -- how many links are around the first and the last page (default: 1)
            :linkSeparator -- string separator for page HTML elements (default: single space)
            :paramName -- parameter name for page number in URLs (default: :page)
            :params -- additional parameters when generating pagination links
            (eg. :controller => "foo", :action => nil)
            :pageLinks -- when false, only previous/next links are rendered (default: true)
            :container -- toggles rendering of the DIV container for pagination links, set to
            false only when you are rendering your own pagination markup (default: true)
          */
        $scope.defaults = {
          paginationClass: 'pagination',
          previousLabel: 'Previous',
          nextLabel: 'Next',
          innerWindow: 1,
          outerWindow: 1,
          linkSeperator: ' ',
          paramName: 'page',
          params: {},
          pageLinks: true,
          container: true,
        };

        $scope.windowedPageNumbers = function() {
          var left = [];
          var middle = [];
          var right = [];
          var x;
          var windowFrom = $scope.params.currentPage - $scope.options.innerWindow;
          var windowTo = $scope.params.currentPage + $scope.options.innerWindow;

          if (windowTo > $scope.params.totalPages) {
            windowFrom -= windowTo - $scope.params.totalPages;
            windowTo = $scope.params.totalPages;
          }

          if (windowFrom < 1) {
            windowTo += 1 - windowFrom;
            windowFrom = 1;
            if (windowTo > $scope.params.totalPages) {
              windowTo = $scope.params.totalPages;
            }
          }

          // these are always visible
          for (x = windowFrom; x < windowTo + 1; x++) {
            middle.push({
              value: x
            });
          }

          // left window
          if ($scope.options.outerWindow + 3 < middle[0].value) {
            for (x = 1; x < $scope.options.outerWindow + 1; x++) {
              left.push({
                value: x
              });
            }
            left.push({
              value: '\u2026',
              kind: 'gap'
            });
          } else {
            for (x = 1; x < middle[0].value; x++) {
              left.push({
                value: x
              });
            }
          }

          // right window
          if ($scope.params.totalPages - $scope.options.outerWindow - 2 > middle[middle.length - 1].value) {
            right.push({
              value: '\u2026',
              kind: 'gap'
            });
            for (x = $scope.params.totalPages - $scope.options.outerWindow; x < $scope.params.totalPages; x++) {
              right.push({
                value: x
              });
            }
          } else {

            // runs into visible pages
            for (x = middle[middle.length - 1].value + 1; x <= $scope.params.totalPages; x++) {
              right.push({
                value: x
              });
            }
          }
          return left.concat(middle.concat(right));
        };

        $scope.render = function() {
          $scope.collection = $scope.windowedPageNumbers();
        };

        $scope.$watch('config', function(newVal) {
          if (typeof newVal === 'undefined') {
            return;
          }
          $scope.options = angular.extend(angular.copy($scope.defaults, {}), angular.copy(newVal, {}));
          if ($scope.params.currentPage) {
            $scope.render();
          }
        });

        $scope.$watch('params.currentPage', function(newVal) {
          if (typeof newVal === 'undefined') {
            return;
          }
          $scope.render();
        });

      }
    };
  });
});
