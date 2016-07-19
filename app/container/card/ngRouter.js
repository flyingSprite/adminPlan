define(['adminApp', 'config'], function (adminApp, config) {
  var templatePath = config.rootPath + 'container/card/';
  var defaultUiSref = 'main.card.';
  var ngRouter = [
    {
      title: 'Card Dashboard',
      name: 'dashboard',
      uiSref: defaultUiSref + 'dashboard',
      templateUrl: templatePath + 'dashboard/index.html',
      controller: 'CardDashboardController',
      controllerUrl: templatePath + 'dashboard/controller'
    },
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
