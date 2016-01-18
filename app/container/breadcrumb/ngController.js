define(['adminApp', 'angular', 'angular-ui-router'], function (adminApp) {

  adminApp.controller('breadcrumbController', function ($scope, breadcrumb, socket){
    socket.send('sss');
    var self = this;
    self.breadcrumb = breadcrumb;

    self.breadcrumb.title = 'Title';
    self.breadcrumb.subTitle = 'SubTitle'

  });
});