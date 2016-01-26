define(['angular', 'ngRequire', 'angular-ui-router'], function () {

  var app = angular.module('ngApp', ['ngRequire', 'ui.router', 'pascalprecht.translate']);
  return app;
});