define(['adminApp', 'config'], function (adminApp, config) {
  var templatePath = config.rootPath + 'container/mission/';
  var defaultUiSref = 'main.mission.';
  var ngRouter = [
    {
      title: 'Mission List',
      name: 'list',
      params: ':id',
      uiSref: defaultUiSref + 'list',
      templateUrl: templatePath + 'list/index.html',
      controller: 'MissionListController',
      controllerUrl: templatePath + 'list/controller'
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
