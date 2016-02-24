define(['adminApp', 'angular', 'angular-ui-router'], function (adminApp) {

  adminApp.controller('breadcrumbController', function ($scope, $state, breadcrumb, socket){
    socket.send('sss');
    var self = this;
    self.breadcrumb = breadcrumb;

    self.breadcrumb.title = 'Title';
    self.breadcrumb.subTitle = 'SubTitle'
    self.hideBreadCrumb = function () {
      console.log(self.breadcrumb.list == undefined || self.breadcrumb.list.length == 0);
      return self.breadcrumb.list == undefined || self.breadcrumb.list.length == 0;
    }
    self.showTo = function (url) {
      if(url != undefined && url != ''){
        $state.go(url);
      }
    }
  });
});