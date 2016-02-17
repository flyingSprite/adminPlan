define(['adminApp'], function (adminApp) {

  adminApp.controller('RecordListController', function ($scope, $http, breadcrumb, adminHttp){

    var self = this;
    self.recordList = [];

    self.getInfo = function (id){
      adminHttp({method: 'GET', url: '/blog/info?id=' + id})
      .success(function(response){
        console.log(response);
      });
    };

    adminHttp({method: 'GET', url: '/blog'})
    .success(function (response){
      self.recordList.length = 0;
      self.recordList.concat(response);
      angular.forEach(response, function(value, index){
        this.push(value);
      }, self.recordList);
    }).error(function (err){
    });
    // for(var i = 0; i < 10; i ++){
    //   self.recordList.push({
    //     title: 'This is a test. Count: ' + i,
    //     content: 'This is a message.'
    //   });
    // }
  });

});
