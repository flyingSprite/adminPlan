define(['adminApp', 'config'], function (adminApp, config) {
  var templatePath = config.rootPath + 'container/blog/';
  var defaultUiSref = 'main.blog.';
  var ngRouter = [
    {
      title: 'Blog List',
      name: 'list',
      params: ':id',
      uiSref: defaultUiSref + 'list',
      templateUrl: templatePath + 'list/index.html',
      controller: 'BlogListController',
      controllerUrl: templatePath + 'list/controller'
    },
    {
      title: 'Blog Editor',
      name: 'editor',
      params: ':id',
      uiSref: defaultUiSref + 'editor',
      templateUrl: templatePath + 'editor/index.html',
      controller: 'EditorController',
      controllerUrl: templatePath + 'editor/controller'
    },
    {
      title: 'Blog Info',
      name: 'info',
      params: ':id',
      uiSref: defaultUiSref + 'info',
      templateUrl: templatePath + 'info/index.html',
      controller: 'BlogInfoController',
      controllerUrl: templatePath + 'info/controller'
    }
  ];
  adminApp.config([
    '$stateProvider', '$urlRouterProvider', '$requireProvider',
    function ($stateProvider, $urlRouterProvider, $requireProvider) {
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
    }
  ]);
});
