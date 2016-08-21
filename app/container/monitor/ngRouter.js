define(['adminApp', 'config'], function (adminApp, config) {
  var templatePath = config.rootPath + 'container/monitor/';
  var defaultUiSref = 'main.monitor.';
  var ngRouter = [
    {
      title: 'Monitor CPU',
      name: 'cpu',
      params: ':id',
      uiSref: defaultUiSref + 'cpu',
      templateUrl: templatePath + 'cpu/index.html',
      controller: 'MonitorCPUController',
      controllerUrl: templatePath + 'cpu/controller'
    }
  ];
  adminApp.config(['generateProvider', function (generateProvider) {
    angular.forEach(ngRouter, function (value) {
      generateProvider.router(value);
    });
  }]);
});
