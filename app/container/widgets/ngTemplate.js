define(['adminApp',
  './ngController'
  ], function (adminApp) {

  adminApp.config(function ($stateProvider, $urlRouterProvider) {

    var templatePath = 'container/widgets/'

    $stateProvider
      .state('main.widgets.index', {
        url: '/index',
        templateUrl: templatePath + 'widgets.html',
        controller: 'widgetsIndexController as ctrl'
      });
  });
});