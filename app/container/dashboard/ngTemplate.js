define(['adminApp', 'config'], function (adminApp, config) {
  var templatePath = config.rootPath + 'container/dashboard/';
  adminApp.config([
    '$stateProvider', '$urlRouterProvider', '$requireProvider',
    function ($stateProvider, $urlRouterProvider, $requireProvider) {

      $stateProvider
        .state('main.dashboard.index', {
          url: '/index',
          templateUrl: templatePath + 'dashboard.html',
          controller: 'dashboardIndexController',
          controllerAs: 'ctrl',
          resolve: {
            deps: $requireProvider.requireJS([templatePath + 'ngController.js'])
          },
        });
    }
  ]);
});
