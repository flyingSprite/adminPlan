define(['angular', 'angular-ui-router',
  './ngController'
  ], function () {

  var app = angular.module('app.widgets', ['ui.router', 'app.widgets.controller']);

  app.config(function ($stateProvider, $urlRouterProvider) {

    var templatePath = 'views/widgets/'

    $stateProvider
      .state('main.widgets.index', {
        url: 'widgets',
        templateUrl: templatePath + 'widgets.html',
        controller: 'widgetsIndexController as ctrl'
      });
  });
});