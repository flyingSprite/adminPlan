define(['adminApp', 'config'], function (adminApp, config) {
  var templatePath = config.rootPath + 'container/design/';
  var defaultUiSref = 'main.design.';
  var ngRouter = [
    {
      title: 'Design Closet',
      name: 'closet',
      params: ':id',
      uiSref: defaultUiSref + 'closet',
      templateUrl: templatePath + 'closet/index.html',
      controller: 'DesignClosetController',
      controllerUrl: templatePath + 'closet/controller'
    }
  ];
  adminApp.config([
    '$stateProvider', '$urlRouterProvider', '$requireProvider',
    function ($stateProvider, $urlRouterProvider, $requireProvider) {
      angular.forEach(ngRouter, function (value) {
        $stateProvider
        .state(value.uiSref, {
          url: '/' + value.name +'?'+ value.params,
          templateUrl: value.templateUrl,
          controller: value.controller,
          controllerAs: 'ctrl',
          resolve: {
            deps: $requireProvider.requireJS([value.controllerUrl])
          },
          params: { data: {} }
        });
      });
    }
  ]);
});
