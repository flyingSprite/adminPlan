define(['angular', 'angular-ui-router',
  './ngController'
  ], function () {

  var app = angular.module('app.dashboard', ['ui.router', 'app.dashboard.controller']);

  app.config(function ($stateProvider, $urlRouterProvider) {

    var templatePath = 'views/dashboard/'

    $stateProvider
      .state('main.dashboard.index', {
        url: 'dashboard',
        templateUrl: templatePath + 'dashboard.html',
        controller: 'dashboardIndexController as ctrl'
      });
  });
});