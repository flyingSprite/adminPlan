define(['angular', 'ngRequire', 'angular-material', 'angular-ui-router', 'ui-codemirror' , 'angular-masonry'], function () {

  var app = angular.module('ngApp', ['ngRequire', 'ngMaterial', 'ui.codemirror', 'ui.router',
    'wu.masonry',
    'pascalprecht.translate']);
  return app;
});