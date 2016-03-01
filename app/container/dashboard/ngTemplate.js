define(['adminApp',
  ], function (adminApp) {

  adminApp.config(function ($stateProvider, $urlRouterProvider, $requireProvider) {

    var templatePath = 'container/dashboard/'

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
  });
});