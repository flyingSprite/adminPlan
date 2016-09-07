define(['adminApp', 'config'], function (adminApp, config) {
  var templatePath = config.rootPath + 'container/docs/';
  var defaultUiSref = 'main.docs.';
  var ngRouter = [
    {
      title: 'Document Subject',
      name: 'subject',
      params: ':id',
      uiSref: defaultUiSref + 'subject',
      templateUrl: templatePath + 'subject/index.html',
      controller: 'DocsSubjectController',
      controllerUrl: templatePath + 'subject/controller'
    }, {
      title: 'Document Wiki',
      name: 'wiki',
      params: ':id',
      uiSref: defaultUiSref + 'wiki',
      templateUrl: templatePath + 'wiki/index.html',
      controller: 'DocsWikiController',
      controllerUrl: templatePath + 'wiki/controller'
    }

  ];
  adminApp.config(['$urlRouterProvider', '$requireProvider', 'generateProvider',
    function ($urlRouterProvider, $requireProvider, generateProvider) {
      angular.forEach(ngRouter, function (value) {
        generateProvider.router(value);
      });
    }
  ]);
});
