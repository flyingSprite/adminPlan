
'use strict';

/**
 * MUST use plugin.js
 */
define('media-video', ['adminApp'], function(adminApp) {

  adminApp.directive('apVideo', function () {
    return {
      restrict: 'E',
      scope: {
        src: '@'
      },
      template:'<div class="video-wrapper"><video id="video-demo" width="300" height="300"></video></div>',
      transclude: true,
      controller: ['$scope', function($scope) {
        console.log($scope);
      }]
    };
  });
});
