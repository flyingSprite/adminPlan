define(['adminApp'], function (adminApp) {
  var tempatePath = 'container/ltaaa/';
  var defaultUiSref = 'main.ltaaa.';
  var ngRouter = [
    {
      title: 'Ltaaa List',
      name: 'list',
      params: ':id',
      uiSref: defaultUiSref + 'list',
      templateUrl: tempatePath + 'list/index.html',
      controller: 'LtaaaListController',
      controllerUrl: tempatePath + 'list/controller'
    }
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