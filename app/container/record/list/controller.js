define(['adminApp'], function (adminApp) {

  adminApp.controller('RecordListController', function ($scope, $state, breadcrumb, adminHttp){

    var self = this;
    self.recordList = [];

    self.getInfo = function (id){
      $state.go("main.record.info", {data: {id: id}, id: id});
      // adminHttp({method: 'GET', url: '/blog/info?id=' + id})
      // .success(function(data){
      //   console.log(data.currentDate);
      //   console.log(new Date(data.currentDate).Format('yyyy-MM-dd hh:mm:ss'));
      // });
    };

    self.getDateFormat = function (time){
      if (typeof(time) != 'number') {
        time = 1455715613608;
      }
      return new Date(time).Format('yyyy-MM-dd hh:mm:ss');
    }

    adminHttp({method: 'GET', url: '/blog'})
    .success(function (response){
      self.recordList.length = 0;
      self.recordList.concat(response);
      angular.forEach(response, function(value, index){
        this.push(value);
      }, self.recordList);
    }).error(function (err){
    });
  });

});
