/**
 * Load all necessary tools.
 */
define([
  'angular',
  'ngRequire',
  'angular-material',
  'angular-ui-router',
  'ui-codemirror',
  'angular-ui-router',
  'ui-codemirror' ,
  'angular-masonry',
  'ap-directive',
  'angular-bootstrap-toggle-switch'
], function () {

  var app = angular.module('ngApp',
    [
      'ngRequire',
      'ngMaterial',
      'ui.codemirror',
      'ui.router',
      'wu.masonry',
      'ap.directive',
      'pascalprecht.translate',
      'toggle-switch'
    ]
  );
  return app;
});
