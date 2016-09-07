/**
 * Load all necessary tools.
 */
define([
  'angular',
  'ngRequire',
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
      'ui.codemirror',
      'ui.router',
      'wu.masonry',
      'pascalprecht.translate',
      'toggle-switch'
    ]
  );
  return app;
});
