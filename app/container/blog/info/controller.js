define(['adminApp', 'moment'], function (adminApp, moment) {

  adminApp.controller('BlogInfoController', function ($scope, $stateParams, breadcrumb, adminHttp){
    var self = this;
    // breadcrumb.list = [{sref: 'main.record.list', title: "Blog List"},
    //                    {sref: '', title: 'Info'}]
    self.blog = {
      content: ''
    };
    var id = $stateParams.id;
    if (id) {
      adminHttp({method: 'GET', url: '/blog/info?id=' + id})
      .success(function(data){
        self.blog.title = data.title;
        self.blog.content = data.content;
        self.blog.currentDate = moment(data.currentDate).format('YYYY-MM-DD HH:mm:ss');
        self.blog.type = data.type;
        self.blog.author = data.author ? data.author : 'Quesle';
      });
    }
  });
});