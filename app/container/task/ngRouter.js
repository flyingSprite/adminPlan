define(['adminApp', 'config'], function (adminApp, config) {
  var templatePath = config.rootPath + 'container/task/';
  var defaultUiSref = 'main.task.';
  var ngRouter = [
    {
      title: 'Task Detail',
      name: 'detail',
      params: ':id',
      uiSref: defaultUiSref + 'detail',
      templateUrl: templatePath + 'detail/index.html',
      controller: 'TaskDetailController',
      controllerUrl: templatePath + 'detail/controller'
    },
    {
      title: 'Media Type',
      name: 'type',
      params: ':id',
      uiSref: defaultUiSref + 'type',
      templateUrl: templatePath + 'type/index.html',
      controller: 'TaskMediaTypeController',
      controllerUrl: templatePath + 'type/controller'
    },
    {
      title: 'Note',
      name: 'note',
      params: ':id',
      uiSref: defaultUiSref + 'note',
      templateUrl: templatePath + 'note/index.html',
      controller: 'TaskNoteController',
      controllerUrl: templatePath + 'note/controller'
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
