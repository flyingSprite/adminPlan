/**
 * Load all necessary tools.
 */
define([
  'angular-ui-router',
  'oclazyload'
], function () {

  var app = angular.module('ngApp',[
    'oc.lazyLoad',
    'ui.router',
    'pascalprecht.translate'
  ]);
  return app.config([
    '$provide',
    '$compileProvider',
    '$controllerProvider',
    '$filterProvider',
    function($provide, $compileProvider, $controllerProvider, $filterProvider){
      app.controller = $controllerProvider.register;
      app.directive = $compileProvider.directive;
      app.filter = $filterProvider.register;
      app.factory = $provide.factory;
      app.service = $provide.service;
      app.provider = $provide.provider;
      app.value = $provide.value;
      app.constant = $provide.constant;
      app.decorator = $provide.decorator;
    }]);
});
