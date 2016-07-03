define(['adminApp'], function (adminApp) {
  adminApp.controller('DesignClosetController', [
    '$scope', '$state', '$anchorScroll', '$location', 'breadcrumb', 'adminHttp', 'notification',
    function ($scope, $state, $anchorScroll, $location, breadcrumb, adminHttp, notification){
      var self = this;
      self.showNotification = function () {
        notification.notice('This is a test!');
      };
    }
  ]);
});
