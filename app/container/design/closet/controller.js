define(['adminApp', 'moment', 'ap-charts'], function (adminApp) {
  adminApp.controller('DesignClosetController', [
    '$scope',
    '$timeout',
    function ($scope, $timeout){

      var self = this;
      self.progressNum = 0;
      self.setProgress = function() {
        if (self.progressNum >= 100) {
          self.progressNum = 0;
        } else {
          self.progressNum = self.progressNum + 5;
        }
      };

      // self.validator = ['ipv4'];
      self.validator = 'ipv4-netmask';

      self.components = {
        apMultiEditInput: {
          name: 'apMultiEditInput',
          code: '<ap-mulit-edit-input ng-model="ctrl.selectList" ng-validate="ctrl.validator"></ap-mulit-edit-input>'
        }
      };

      function start() {
        self.setProgress();
        $timeout(start, 500);
      }
      start();
    }
  ]);
});
