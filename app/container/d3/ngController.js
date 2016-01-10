define(['adminApp', './ngRouter'], function (adminApp, ngRouter) {

  adminApp.config(function ($stateProvider, $urlRouterProvider, $requireProvider) {

    /**
     * value pattern:
     * {
     *   name: "centerPoint",
     *   tempateUrl: "views/d3/centerPoint/index.html",
     *   controller: "D3CenterPointController",
     *   controllerUrl: "views/d3/centerPoint/controller"
     * }
     *
     *
     */
    angular.forEach(ngRouter, function (value, index) {
      $stateProvider
      .state('main.d3.' + value.name, {
        url: '/' + value.name,
        templateUrl: value.templateUrl,
        controller: value.controller,
        controllerAs: 'ctrl',
        resolve: {
          deps: $requireProvider.requireJS([value.controllerUrl])
        }
      });
    });
  });

});