define(['adminApp', 'moment', 'ap-charts'], function (adminApp) {
  adminApp.controller('DesignClosetController', [
    '$scope', '$state', '$anchorScroll', '$location', 'breadcrumb', 'notification', 'util', 'api', 'GenerateUniqueId',
    function (){

      var self = this;
      self.progressNum = 0;
      function setProgress() {
        if (self.progressNum >= 100) {
          self.progressNum = 0;
        } else {
          self.progressNum = self.progressNum + 5;
        }
        console.log('xxx', self.progressNum);
        setTimeout(setProgress, 500);
      }
      setProgress();
      // console.log(GenerateUniqueId);
      // breadcrumb();
      // var self = this;
      // self.moment = moment;
      // self.showNotification = function () {
      //   notification.notice('This is a test!');
      // };
      //
      // self.data = { content: '' };
      // self.list = [];
      // self.hotnews = [];
      //
      // self.websites = {};
      //
      // api.hotnews(function(hotnews){
      //   setHotnewsByWebsite(hotnews);
      // });
      //
      // self.submit = function() {
      //   if (!util.isNull(self.data.content)) {
      //     var data = {
      //       content: self.data.content,
      //     };
      //
      //     self.list.push(data);
      //     self.data.content = '';
      //   }
      // };
      //
      // function setHotnewsByWebsite(hotnews) {
      //   angular.forEach(hotnews, function(news) {
      //     var website = self.websites[news.website];
      //     if (website) {
      //       website.push(news);
      //     } else {
      //       self.websites[news.website] = [];
      //       self.websites[news.website].push(news);
      //     }
      //   });
      // }
    }
  ]);
});
