define(['adminApp', 'moment'], function (adminApp, moment) {
  adminApp.controller('DesignClosetController', [
    '$scope', '$state', '$anchorScroll', '$location', 'breadcrumb', 'notification', 'util', 'api',
    function ($scope, $state, $anchorScroll, $location, breadcrumb, notification, util, api){
      var self = this;
      self.moment = moment;
      self.showNotification = function () {
        notification.notice('This is a test!');
      };

      self.data = { content: '' };
      self.list = [];
      self.hotnews = [];

      api.hotnews(function(hotnews){
        console.log(hotnews);
        self.hotnews.lenght = 0;
        self.hotnews = self.hotnews.concat(hotnews);
      });

      self.submit = function() {
        if (!util.isNull(self.data.content)) {
          var data = {
            content: self.data.content,
          };

          self.list.push(data);
          self.data.content = '';
        }
      };
    }
  ]);
});
