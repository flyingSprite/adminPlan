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
  'ui-codemirror',
  'angular-masonry',
  'angular-bootstrap-toggle-switch'
], function () {

  var app = angular.module('ngApp',
    [
      'ngRequire',
      'ngMaterial',
      'ui.codemirror',
      'ui.router',
      'wu.masonry',
      'pascalprecht.translate',
      'toggle-switch'
    ]
  );
  return app;
});
