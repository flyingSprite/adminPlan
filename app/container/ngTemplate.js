define(['adminApp',
  './breadcrumb/ngController',
  './dashboard/ngTemplate',
  './widgets/ngTemplate',
  './d3/ngController'
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
      .state('main.widgets', {
        url: 'widgets',
        views: {
          'main.breadcrumb': {
            templateUrl: 'container/breadcrumb/ngBreadcrumb.html',
            controller: 'breadcrumbController as ctrl'
          },
          'main.container':{
            templateUrl: 'container/widgets/ngTemplate.html'
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
      });
  });
});