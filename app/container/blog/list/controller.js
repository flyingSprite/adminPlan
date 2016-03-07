define(['adminApp'], function (adminApp) {

  adminApp.controller('BlogListController', function ($scope, $state, breadcrumb, adminHttp){
    // breadcrumb.list = [{sref: 'main.record.list', title: "Blog List"}];
    var self = this;
    self.blogList = [];

    self.getInfo = function (id){
      $state.go("main.blog.info", {data: {id: id}, id: id});
    };

    self.editThisBlog = function (id){
      $state.go("main.blog.editor", {id: id});
    }

    self.canEdit = true;

    self.getDateFormat = function (time){
      if (typeof(time) != 'number') {
        time = 1455715613608;
      }
      return new Date(time).Format('yyyy-MM-dd hh:mm:ss');
    }

    function initBlogListController () {
      adminHttp({method: 'GET', url: '/blog'})
        .success(function (data){
          self.blogList.length = 0;
          angular.forEach(data, function(value, index){
            value.currentDate = self.getDateFormat(value.currentDate);
            if (value.author == undefined ){
              value.author = 'Quesle';
            }
            this.push(value);
          }, self.blogList);
        }).error(function (err){
        });

    }

    initBlogListController();
  });

});