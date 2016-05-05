define([
  'angular',
  'ngRequire',
  'angular-material',
  'angular-pagtinate',
  'angular-ui-router',
  'ui-codemirror' ,
  'angular-masonry'
], function () {

  var app = angular.module('ngApp',
    [
      'ngRequire',
      'ngMaterial',
      'ui.codemirror',
      'ui.router',
      'wu.masonry',
      'bgf.paginateAnything',
      'pascalprecht.translate'
    ]
  );
  return app;
});