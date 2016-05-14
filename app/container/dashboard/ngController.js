define(['adminApp', 'Raphael', 'worldmap'], function (adminApp, Raphael, worldmap) {

  adminApp.controller('dashboardIndexController', [
    '$scope', '$http', '$sce', 'adminHttp', 'breadcrumb',
    function ($scope, $http, $sce, adminHttp, breadcrumb){

      var self = this;
      self.count = {
        blog: 0,
        ltaaa: 0
      }
      adminHttp({method: 'GET', url: '/dashboard/count'})
      .success(function(count){
        console.log(count);
        if(count){
          self.count.blog = count.blog;
          self.count.ltaaa = count.ltaaa;
        }
      })
      .error(function (err) {
      });


      // Show world map
      worldmap('world-map');
    }
  ]);
});
