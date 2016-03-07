define(['adminApp',
  './breadcrumb/ngController',
  './dashboard/ngTemplate',
  './record/ngController',
  './d3/ngController',
  './card/ngController'
  ], function (adminApp) {


  adminApp.config(function ($stateProvider, $urlRouterProvider) {
    var templatePath = 'container/dashboard/'

    $stateProvider
      .state('main.dashboard', {
        url: 'dashboard',
        views: {
          'main.breadcrumb': {
            templateUrl: 'container/breadcrumb/ngBreadcrumb.html',
            controller: 'breadcrumbController as ctrl'
          },
          'main.container':{
            templateUrl: 'container/dashboard/ngTemplate.html'
          }
        }
      })
      .state('main.record', {
        url: 'record',
        views: {
          'main.breadcrumb': {
            templateUrl: 'container/breadcrumb/ngBreadcrumb.html',
            controller: 'breadcrumbController as ctrl'
          },
          'main.container':{
            templateUrl: 'container/record/ngTemplate.html'
          }
        }
      })
      .state('main.d3', {
        url: 'd3',
        views: {
          'main.breadcrumb': {
            templateUrl: 'container/breadcrumb/ngBreadcrumb.html',
            controller: 'breadcrumbController as ctrl'
          },
          'main.container':{
            templateUrl: 'container/d3/ngTemplate.html'
          }
        }
      })
      .state('main.card', {
        url: 'card',
        views: {
          'main.breadcrumb': {
            templateUrl: 'container/breadcrumb/ngBreadcrumb.html',
            controller: 'breadcrumbController as ctrl'
          },
          'main.container':{
            templateUrl: 'container/card/ngTemplate.html'
          }
        }
      });
  });
});