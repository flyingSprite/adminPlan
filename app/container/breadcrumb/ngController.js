define(['adminApp', 'angular', 'angular-ui-router'], function (adminApp) {

  adminApp.controller('breadcrumbController', [
    '$scope', '$state', 'breadcrumb', 'socket',
    function ($scope, $state, breadcrumb, socket){
      socket.send('sss');
      var self = this;
      self.breadcrumb = breadcrumb;

      self.breadcrumb.title = 'Title';
      self.breadcrumb.subTitle = 'SubTitle'
      self.hideBreadCrumb = function () {
        return self.breadcrumb.list == undefined || self.breadcrumb.list.length == 0;
      }
      self.showTo = function (url) {
        if(url != undefined && url != ''){
          $state.go(url);
        }
      }
    }
  ]);
});
