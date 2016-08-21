define(['adminApp', 'ap-charts'], function (adminApp) {
  adminApp.controller('MonitorCPUController', [
    '$state', 'breadcrumb', function($state, breadcrumb){
      breadcrumb('Monitor CPU', [{
        name: 'Monitor',
        link: 'main.monitor.cpu'
      }, {
        name: 'CPU',
        link: 'main.monitor.cpu'
      }]);
    }
  ]);
});
