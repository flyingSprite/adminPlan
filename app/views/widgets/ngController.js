define(['angular', 'angular-ui-router'], function () {

  var app = angular.module('app.widgets.controller', ['ui.router']);
  app.controller('widgetsIndexController', function ($scope, breadcrumb){

    breadcrumb.title = 'Widgets';
    breadcrumb.subTitle = 'Widgets Panel';

    var self = this;
    self.message = '<h1> This is a widgets controller.</h1>';
    self.number = 0;

    self.changeNumber = function () {
      self.number += 1;
    }
  });
});