define(['adminApp'], function (adminApp) {

  adminApp.controller('widgetsIndexController', function ($scope, breadcrumb){

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