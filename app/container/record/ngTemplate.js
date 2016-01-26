define(['adminApp',
  './ngController'
  ], function (adminApp) {

  adminApp.config(function ($stateProvider, $urlRouterProvider) {

    var templatePath = 'container/record/'

    $stateProvider
      .state('main.record.index', {
        url: '/index',
        templateUrl: templatePath + 'record.html',
        controller: 'recordIndexController as ctrl'
      });
  });
});