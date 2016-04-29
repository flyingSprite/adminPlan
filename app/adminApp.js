/**
 * Load all necessary tools.
 */
define([
  'angular',
  'ngRequire',
  'angular-material',
  'angular-ui-router',
  'ui-codemirror'
], function () {

  var app = angular.module('ngApp',
    [
      'ngRequire',
      'ngMaterial',
      'ui.codemirror',
      'ui.router',
      'pascalprecht.translate'
    ]
  );
  return app;
});