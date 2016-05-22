/**
 * Load all necessary tools.
 */
define([
  'angular',
  'ngRequire',
  'angular-material',
  'angular-ui-router',
  'ui-codemirror',
  'angular-pagtinate',
  'angular-ui-router',
  'ui-codemirror' ,
  'angular-masonry',
  'ap-directive'
], function () {

  var app = angular.module('ngApp',
    [
      'ngRequire',
      'ngMaterial',
      'ui.codemirror',
      'ui.router',
      'wu.masonry',
      'ap.directive',
      'bgf.paginateAnything',
      'pascalprecht.translate'
    ]
  );
  return app;
});
