define(['adminApp',
  './breadcrumb/ngController',
  './dashboard/ngTemplate',
  './blog/ngRouter',
  './d3/ngRouter',
  './card/ngRouter',
  './ltaaa/ngRouter'
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
      .state('main.blog', {
        url: 'blog',
        views: {
          'main.breadcrumb': {
            templateUrl: 'container/breadcrumb/ngBreadcrumb.html',
            controller: 'breadcrumbController as ctrl'
          },
          'main.container':{
            templateUrl: 'container/blog/ngTemplate.html'
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
      })
      .state('main.ltaaa', {
        url: 'ltaaa',
        views: {
          'main.breadcrumb': {
            templateUrl: 'container/breadcrumb/ngBreadcrumb.html',
            controller: 'breadcrumbController as ctrl'
          },
          'main.container':{
            templateUrl: 'container/ltaaa/ngTemplate.html'
          }
        }
      });
  });
});