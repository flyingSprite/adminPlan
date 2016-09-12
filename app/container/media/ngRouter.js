define(['adminApp', 'config'], function (adminApp, config) {
  var templatePath = config.rootPath + 'container/media/';
  var defaultUiSref = 'main.media.';
  var ngRouter = [
    {
      title: 'Media Video',
      name: 'video',
      params: ':id',
      uiSref: defaultUiSref + 'video',
      templateUrl: templatePath + 'video/index.html',
      controller: 'MediaVideoController',
      controllerUrl: templatePath + 'video/controller'
    }
  ];
  adminApp.config(['generateProvider', function (generateProvider) {
    angular.forEach(ngRouter, function (value) {
      generateProvider.router(value);
    });
  }]);
});
