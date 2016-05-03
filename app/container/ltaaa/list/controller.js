define(['adminApp'], function (adminApp) {

  adminApp.controller('LtaaaListController', function ($scope, $state, breadcrumb, adminHttp){
    // breadcrumb.list = [{sref: 'main.record.list', title: "Blog List"}];
    var self = this;
    self.ltaaaTitleList = [];

    self.pager = {
      total: 0,
      page: 0,
      size: 20
    }

    console.log('ccccccccc');

    self.getDateFormat = function (time){
      if (typeof(time) != 'number') {
        time = 1455715613608;
      }
      return new Date(time).Format('yyyy-MM-dd hh:mm:ss');
    }

    function findLtaaaTitle() {
      var url = '/ltaaa?size=' + self.pager.size + '&' + 'page=' + self.pager.page;
      adminHttp({method: 'GET', url: url})
        .success(function (res){
          self.ltaaaTitleList.length = 0;
          console.log(res);
          if (res.data) {
            angular.forEach(res.data, function(value, index){
              console.log(value);
              this.push(value);
            }, self.ltaaaTitleList);
          }
        }).error(function (err){
        });
    }

    findLtaaaTitle();
  });

});
