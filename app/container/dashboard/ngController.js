define(['adminApp', 'Raphael', 'worldmap'], function (adminApp, Raphael, worldmap) {

  adminApp.controller('dashboardIndexController', [
    '$scope', '$http', '$sce', 'api', 'breadcrumb',
    function ($scope, $http, $sce, api, breadcrumb){
      breadcrumb();
      var self = this;
      self.count = {
        blog: 0,
        ltaaa: 0,
        hotnews: 0,
        cmsMonitor: 0
      };
      // adminHttp({method: 'GET', url: '/dashboard/count'})
      // .success(function(count){
      //   console.log(count);
      //   if(count){
      //     self.count.blog = count.blog;
      //     self.count.ltaaa = count.ltaaa;
      //   }
      // })
      // .error(function (err) {
      // });
      api.count(function(count) {
        self.count.blog = count.blog;
        self.count.ltaaa = count.ltaaa;
        self.count.hotnews = count.hotnews;
        self.count.cmsMonitor = count.cmsMonitor;
      }, function() {});


      // Show world map
      worldmap('world-map');
    }
  ]);
});
