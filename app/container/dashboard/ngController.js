define(['adminApp', 'Raphael', 'worldmap'], function (adminApp, Raphael, worldmap) {

  adminApp.controller('dashboardIndexController', function ($scope, $http, $sce, adminHttp, breadcrumb){

    var self = this;
    self.count = {
      blog: 0
    }
    adminHttp({method: 'GET', url: '/dashboard/count'})
    .success(function(count){
      if(count && count.blog){
        self.count.blog = count.blog;
      }
    })
    .error(function (err) {
    });


    // Show world map
    worldmap('world-map');
  });
});