define(['adminApp', 'config',
  './breadcrumb/ngController',
  './dashboard/ngTemplate',
  './blog/ngRouter',
  './card/ngRouter',
  './design/ngRouter',
  './ltaaa/ngRouter'
], function (adminApp, config) {
  var templatePath = config.rootPath + 'container';
  adminApp.config([
    '$stateProvider',
    function ($stateProvider) {
      $stateProvider
        .state('main.dashboard', {
          url: 'dashboard',
          views: {
            'main.breadcrumb': {
              templateUrl: templatePath + '/breadcrumb/ngBreadcrumb.html',
              controller: 'breadcrumbController as ctrl'
            },
            'main.container':{
              templateUrl: templatePath + '/dashboard/ngTemplate.html'
            }
          }
        })
        .state('main.blog', {
          url: 'blog',
          views: {
            'main.breadcrumb': {
              templateUrl: templatePath + '/breadcrumb/ngBreadcrumb.html',
              controller: 'breadcrumbController as ctrl'
            },
            'main.container':{
              templateUrl: templatePath + '/blog/ngTemplate.html'
            }
          }
        })
        // .state('main.d3', {
        //   url: 'd3',
        //   views: {
        //     'main.breadcrumb': {
        //       templateUrl: templatePath + '/breadcrumb/ngBreadcrumb.html',
        //       controller: 'breadcrumbController as ctrl'
        //     },
        //     'main.container':{
        //       templateUrl: templatePath + '/d3/ngTemplate.html'
        //     }
        //   }
        // })
        .state('main.card', {
          url: 'card',
          views: {
            'main.breadcrumb': {
              templateUrl: templatePath + '/breadcrumb/ngBreadcrumb.html',
              controller: 'breadcrumbController as ctrl'
            },
            'main.container':{
              templateUrl: templatePath + '/card/ngTemplate.html'
            }
          }
        })
        .state('main.design', {
          url: 'design',
          views: {
            'main.breadcrumb': {
              templateUrl: templatePath + '/breadcrumb/ngBreadcrumb.html',
              controller: 'breadcrumbController as ctrl'
            },
            'main.container':{
              templateUrl: templatePath + '/design/ngTemplate.html'
            }
          }
        })
        .state('main.ltaaa', {
          url: 'ltaaa',
          views: {
            'main.breadcrumb': {
              templateUrl: templatePath + '/breadcrumb/ngBreadcrumb.html',
              controller: 'breadcrumbController as ctrl'
            },
            'main.container':{
              templateUrl: templatePath + '/ltaaa/ngTemplate.html'
            }
          }
        });
    }
  ]);
});
