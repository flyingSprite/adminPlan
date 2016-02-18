define(['adminApp', './ngRouter'], function (adminApp, ngRouter) {

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
        params: {
          data: {}
        }
      });
    });
  });

});