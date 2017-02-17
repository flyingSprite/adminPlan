define('app', [
  'adminApp',
  'config',
  'ap-package',
  'ngRoute',
], function (adminApp, config) {
  adminApp.service('init', function () {
    return {
      imagePath: 'static/image/',
      treeview: function () {
        /* Sidebar tree view */
        $('.sidebar .treeview').tree();
      }
    };
  })
  .service('breadcrumb', function () {
    return {
      title: '',
      subTitle: '',
      list: []
    };
  })
  .provider('generate', [ '$stateProvider',
    function($stateProvider) {
      this.state = function(state) {
        $stateProvider.state('main.' + state.url, {
          url: state.url,
          views: {
            'main.container':{
              templateUrl: state.templateUrl,
              controller: ['$rootScope', function($rootScope) {
                $rootScope.$broadcast('onHeaderTitle', {title: state.title});
              }]
            }
          }
        });
      };
      this.router = function(route) {
        $stateProvider
        .state(route.uiSref, {
          url: '/' + route.name +'?'+ route.params,
          views: {
            '': {
              templateUrl: route.templateUrl,
              controller: route.controller,
              controllerAs: 'ctrl'
            }
          },
          resolve: {
            // deps: $requireProvider.requireJS([route.controllerUrl])
            deps: ['$ocLazyLoad', function($ocLazyLoad) {
              return route.depsModule
              ? $ocLazyLoad.load(route.depsModule).then(function() {
                return $ocLazyLoad.load(route.controllerUrl);
              })
              : $ocLazyLoad.load(route.controllerUrl);
            }]
          },
          params: { data: {} }
        });
      };
      this.$get = function() {};
    }
  ])
  .run(['$rootScope', '$location', function () {
    // $rootScope.$on('$stateChangeStart',
    //   function (event, toState, toParams, fromState, fromParams){
    //     console.log('StateChange', event, toState, toParams, fromState, fromParams);
    //   }
    // );
  }])
  .config(['$ocLazyLoadProvider', function($ocLazyLoadProvider) {
    $ocLazyLoadProvider.config({
      debug: true,
      events: true,
      modules: [
        {
          name: 'ui.codemirror',
          module: true,
          files: [
            '../bower_components/angular-ui-codemirror/ui-codemirror.min.js'
          ]
        }, {
          name: 'wu.masonry',
          module: true,
          files: [
            '../bower_components/angular-masonry/angular-masonry.js'
          ]
        }
      ]
    });
  }])
  .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    // This is home state, will show _header.html, _footer.html
    // And main html
    .state('main', {
      url:'/',
      views: {
        header: {
          templateUrl: '_common/_header.html'
        },
        // breadcrumb: {
        //   templateUrl: '_common/_breadcrumb.html'
        // },
        main: {
          templateUrl: '_common/_container.html'
        },
        footer: {
          templateUrl: '_common/_footer.html'
        }
      }
    });

    $urlRouterProvider
      .when('/main.dashboard.index', '/dashboard/index')
      .when('/main', '/dashboard/index')
      .otherwise('main.dashboard.index');
  }])
  .factory('breadcrumb', ['$rootScope', function($rootScope) {
    return function(subTitle, breadcrumbs) {
      $rootScope.$broadcast(
        'onBreadcrumb',
        {subTitle: subTitle, breadcrumbs: breadcrumbs}
      );
    };
  }])
  .controller('IndexController', ['$scope', '$rootScope', function ($scope, $rootScope) {
    $scope.staticUrl = config.staticUrl;
    var self = this;
    self.currentInfo = {};

    // Authorzation
    self.supportDocEdit = false;
    self.supportTypeEdit = false;
    self.userImg = $scope.staticUrl + '/static/images/user.png';

    // Set the header title in nav.
    $scope.$on('onHeaderTitle', function(event, toState) {
      self.title = toState.title;
    });

    // Set the breadcrumb
    $scope.$on('onBreadcrumb', function(event, toState) {
      self.currentInfo.breadcrumbs = toState.breadcrumbs;
      self.currentInfo.subTitle = toState.subTitle;
      var needBreadcrumb = (self.currentInfo.subTitle !== undefined && self.currentInfo.subTitle !== '');
      self.currentInfo.needBreadCrumb = needBreadcrumb;
    });

    $scope.$on('ocLazyLoad.moduleLoaded', function(e, module) {
      console.log('module loaded', module);
    });
    // Refer http://www.tuicool.com/articles/3Mbi2y6
    // Refer http://www.jb51.net/article/77813.htm
    // Refer https://oclazyload.readme.io/docs/oclazyloadprovider


    // On locationChange
    $rootScope.$on('$locationChangeStart', function() {});

  }]);
});
