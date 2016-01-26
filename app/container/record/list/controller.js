define(['adminApp'], function (adminApp) {

  adminApp.controller('RecordListController', function ($scope, $http, breadcrumb){

    var self = this;
    self.recordList = [];

    $http({
      url: 'http://localhost:8080/solutions/record',
      method: 'GET'
    }).then(function (response){
      self.recordList.length = 0;
      self.recordList.concat(response.data);
      angular.forEach(response.data, function(value, inde){
        this.push(value);
      }, self.recordList);
    }).then(function (err){
    });
  });

});
