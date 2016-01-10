define(['adminApp', './ngController'
  ], function (adminApp) {

  adminApp.config(function ($stateProvider, $urlRouterProvider) {

    var templatePath = 'container/dashboard/'

    $stateProvider
      .state('main.dashboard.index', {
        url: '/index',
        templateUrl: templatePath + 'dashboard.html',
        controller: 'dashboardIndexController as ctrl'
      });
  });
});