define(['angular', 'ngRequire', 'angular-ui-router', 'ui-codemirror'], function () {

  var app = angular.module('ngApp', ['ngRequire', 'ui.codemirror', 'ui.router',
    'pascalprecht.translate']);
  return app;
});