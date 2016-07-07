
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
