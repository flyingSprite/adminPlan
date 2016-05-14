define(['adminApp', 'config'], function (adminApp, config) {
  var templatePath = config.rootPath + 'container/ltaaa/';
  var defaultUiSref = 'main.ltaaa.';
  var ngRouter = [
    {
      title: 'Ltaaa List',
      name: 'list',
      params: ':id',
      uiSref: defaultUiSref + 'list',
      templateUrl: templatePath + 'list/index.html',
      controller: 'LtaaaListController',
      controllerUrl: templatePath + 'list/controller'
    }
  ];
  adminApp.config([
    '$stateProvider', '$urlRouterProvider', '$requireProvider',
    function ($stateProvider, $urlRouterProvider, $requireProvider) {
      angular.forEach(ngRouter, function (value, index) {
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
