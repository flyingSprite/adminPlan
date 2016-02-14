define(['adminApp'], function (adminApp) {

  adminApp.controller('RecordListController', function ($scope, $http, breadcrumb){

    var self = this;
    self.recordList = [];

    $http({
      url: 'http://localhost:8080/solutions/blog',
      method: 'GET'
    }).then(function (response){
      self.recordList.length = 0;
      self.recordList.concat(response.data);
      angular.forEach(response.data, function(value, inde){
        this.push(value);
      }, self.recordList);
    }).then(function (err){
    });
    // for(var i = 0; i < 10; i ++){
    //   self.recordList.push({
    //     title: 'This is a test. Count: ' + i,
    //     content: 'This is a message.'
    //   });
    // }
  });

});
