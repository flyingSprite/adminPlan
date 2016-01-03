define(['angular', 'angular-ui-router'], function () {

  var app = angular.module('app.breadcrumb.controller', ['ui.router']);
  app.controller('breadcrumbController', function ($scope, breadcrumb){
    var self = this;
    console.log(breadcrumb);

    self.breadcrumb = breadcrumb;

    self.breadcrumb.title = 'Title';
    self.breadcrumb.subTitle = 'SubTitle'

  });
});