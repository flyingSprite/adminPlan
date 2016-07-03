define(['adminApp', 'ap-service',
  './dest/container/ngTemplate'
  ], function (adminApp, d3NgRouter, recordNgRouter) {

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
      list: []
    }
  });

  adminApp

  .run(['$rootScope', '$location', function ($rootScope, $location) {
      $rootScope.$on('$stateChangeStart',
      function (event, toState, toParams, fromState, fromParams){
        // console.log('StateChange', event, toState, toParams, fromState, fromParams);
      });

    }])

  .config(function ($stateProvider, $urlRouterProvider) {

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
            $scope.d3List = d3NgRouter;
            $scope.recordList = recordNgRouter;
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
