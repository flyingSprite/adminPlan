define(['angular', 'angular-ui-router',
  './views/ngTemplate'
  ], function () {
  // Load route module in application by adding it as a dependent module.
  var app = angular.module('app', ['app.template', 'ui.router']);

  app.service('init', function () {
    return {
      imagePath: 'static/image/',
      treeview: function () {
        /* Sidebar tree view */
        $(".sidebar .treeview").tree();
      }
    }
  });

  app.service('breadcrumb', function () {
    return {
      title: '',
      subTitle: '',
    }
  });

  app.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider

    // This is home state, will show _header.html, _footer.html
    // And main html
    .state('main', {
      url:'/',
      views: {
        header: {
          templateUrl: '_common/_header.html'
        },
        container: {
          templateUrl: '_common/_container.html'
        },
        footer: {
          templateUrl: '_common/_footer.html'
        },
        'left-side': {
          templateUrl: '_common/_left_side.html',
          controller: function ($scope, init){
            init.treeview();
          }
        }
      }
    })
    // .state('main.dashboard', {
    //   url: 'dashboard',
    //   templateUrl: 'views/dashboard.html',
    //   controller: function ($scope){
    //     console.log("xvzxcvzxcv");
    //   }
    // })
  ;

    $urlRouterProvider.otherwise('main');
  });

});


