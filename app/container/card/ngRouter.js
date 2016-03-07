define(['adminApp'], function (adminApp) {

  var tempatePath = 'container/card/';
  var defaultUiSref = 'main.card.';
  var ngRouter = [
    {
      title: 'Card Dashboard',
      name: 'dashboard',
      uiSref: defaultUiSref + 'dashboard',
      templateUrl: tempatePath + 'dashboard/index.html',
      controller: 'CardDashboardController',
      controllerUrl: tempatePath + 'dashboard/controller'
    },
  ];

  adminApp.config(function ($stateProvider, $urlRouterProvider, $requireProvider) {
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
  });

});