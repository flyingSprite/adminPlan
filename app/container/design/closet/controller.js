define(['adminApp'], function (adminApp) {
  adminApp.controller('DesignClosetController', [
    '$scope', '$state', '$anchorScroll', '$location', 'breadcrumb', 'notification', 'util',
    function ($scope, $state, $anchorScroll, $location, breadcrumb, notification, util){
      var self = this;
      self.showNotification = function () {
        notification.notice('This is a test!');
      };

      self.data = { name: '', message: '', type: '' };
      self.list = [];
      self.submit = function() {
        if (!util.isNull(self.data.name)
            && !util.isNull(self.data.message)
            && !util.isNull(self.data.type)) {
          var data = {
            name: self.data.name,
            message: self.data.message,
            type: self.data.type
          };
          self.list.push(data);
          self.data.name = '';
          self.data.message = '';
          self.data.type = '';
        }
      };
    }
  ]);
});
