define(['adminApp'], function (adminApp) {
  var tempatePath = 'container/blog/';
  var defaultUiSref = 'main.blog.';
  var ngRouter = [
    {
      title: 'Blog List',
      name: 'list',
      params: ':id',
      uiSref: defaultUiSref + 'list',
      templateUrl: tempatePath + 'list/index.html',
      controller: 'BlogListController',
      controllerUrl: tempatePath + 'list/controller'
    },
    {
      title: 'Blog Editor',
      name: 'editor',
      params: ':id',
      uiSref: defaultUiSref + 'editor',
      templateUrl: tempatePath + 'editor/index.html',
      controller: 'EditorController',
      controllerUrl: tempatePath + 'editor/controller'
    },
    {
      title: 'Blog Info',
      name: 'info',
      params: ':id',
      uiSref: defaultUiSref + 'info',
      templateUrl: tempatePath + 'info/index.html',
      controller: 'BlogInfoController',
      controllerUrl: tempatePath + 'info/controller'
    }
  ];
  adminApp.config(function ($stateProvider, $urlRouterProvider, $requireProvider) {
    angular.forEach(ngRouter, function (value, index) {
      $stateProvider
      .state(value.uiSref, {
        url: '/' + value.name +'?'+ value.params,
        templateUrl: value.templateUrl,
        controller: value.controller,
        controllerAs: 'ctrl',
        resolve: {
          deps: $requireProvider.requireJS([value.controllerUrl])
        },
        params: { data: {} }
      });
    });
  });

});