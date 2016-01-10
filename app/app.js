define(['adminApp',
  './container/ngTemplate',
  './templates/services/initService'
  ], function (adminApp) {

  adminApp.service('init', function () {
    return {
      imagePath: 'static/image/',
      treeview: function () {
        /* Sidebar tree view */
        $(".sidebar .treeview").tree();
      }
    }
  });

  adminApp.service('breadcrumb', function () {
    return {
      title: '',
      subTitle: '',
    }
  });

  adminApp.config(function ($stateProvider, $urlRouterProvider) {

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
    });

    $urlRouterProvider
      .when('/main.dashboard.index', '/dashboard/index')
      .when('/main', '/dashboard/index')
      .otherwise('main.dashboard.index');
  });


});


