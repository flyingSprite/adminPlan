define(['adminApp'], function (adminApp) {

  adminApp.controller('RecordListController', function ($scope, $state, breadcrumb, adminHttp){
    // breadcrumb.list = [{sref: 'main.record.list', title: "Blog List"}];
    var self = this;
    self.blogList = [];

    self.getInfo = function (id){
      $state.go("main.record.info", {data: {id: id}, id: id});
    };

    self.editThisBlog = function (id){
      $state.go("main.record.editor", {id: id});
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
            this.push(value);
          }, self.blogList);
        }).error(function (err){
        });

    }

    initBlogListController();
  });

});
