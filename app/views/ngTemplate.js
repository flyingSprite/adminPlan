define(['angular', 'angular-ui-router',
  './breadcrumb/ngController',
  './dashboard/ngTemplate',
  './widgets/ngTemplate'
  ], function () {

  var app = angular.module('app.template', ['ui.router', 'app.dashboard', 'app.widgets', 'app.breadcrumb.controller']);

  app.config(function ($stateProvider, $urlRouterProvider) {

    var templatePath = 'views/dashboard/'

    $stateProvider
      .state('main.dashboard', {
        url: '',
        views: {
          'main.breadcrumb': {
            templateUrl: 'views/breadcrumb/ngBreadcrumb.html',
            controller: 'breadcrumbController as ctrl'
          },
          'main.container':{
            templateUrl: 'views/dashboard/ngTemplate.html'
          }
        }
      })
      .state('main.widgets', {
        url: '',
        views: {
          'main.breadcrumb': {
            templateUrl: 'views/breadcrumb/ngBreadcrumb.html',
            controller: 'breadcrumbController as ctrl'
          },
          'main.container':{
            templateUrl: 'views/widgets/ngTemplate.html'
          }
        }
      });
  });
});