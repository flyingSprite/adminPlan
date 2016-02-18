define(['adminApp'], function (adminApp) {

  adminApp.controller('RecordInfoController', function ($scope, $stateParams, breadcrumb, adminHttp){
    var self = this;
    self.blog = {
      content: ''
    };
    var id = $stateParams.id;
    if (id) {
      adminHttp({method: 'GET', url: '/blog/info?id=' + id})
      .success(function(data){
        self.blog.content = data.content;
        console.log(new Date(data.currentDate).Format('yyyy-MM-dd hh:mm:ss'));
      });
    }
  });
});