
'use strict';

apDirective

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