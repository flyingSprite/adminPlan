define(['adminApp'], function (adminApp) {

  adminApp.controller('RecordEditController', function ($scope, $http, breadcrumb){

    breadcrumb.title = 'record';
    breadcrumb.subTitle = 'Eecord Panel';

    var self = this;

    self.record = {
      title: '',
      content: '',
      type: ''
    };

    self.submitRecord = function () {
      $http({
        url: 'http://localhost:8080/solutions/record',
        method: 'GET'
      }).then(function (response){
      }).then(function (err){
      });

      $http({
        url:'http://localhost:8080/solutions/record',
        method:"POST",
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        transformRequest : function(data){
          if (data === undefined) {
            return data;
          }
          return $.param(data)
        },
        data: self.record
      }).then(function (response){
      });
    };

  });
});