define(['adminApp', 'config'], function (adminApp, config) {
  var templatePath = config.rootPath + 'container/ngTemplate.html';
  var dashboardTemplatePath = config.rootPath + 'container/dashboard/',
    cardTemplatePath = config.rootPath + 'container/card/',
    crawlTemplatePath = config.rootPath + 'container/crawl/',
    designTemplatePath = config.rootPath + 'container/design/',
    docsTemplatePath = config.rootPath + 'container/docs/',
    mediaTemplatePath = config.rootPath + 'container/media/',
    monitorTemplatePath = config.rootPath + 'container/monitor/',
    taskTemplatePath = config.rootPath + 'container/task/';

  var dashboardUiSref = 'main.dashboard.',
    cardUiSref = 'main.card.',
    crawlUiSref = 'main.crawl.',
    designUiSref = 'main.design.',
    docsUiSref = 'main.docs.',
    mediaUiSref = 'main.media.',
    monitorUiSref = 'main.monitor.',
    taskUiSref = 'main.task.';

  var dashboardRouter = [
    {
      title: 'Dashboard Index',
      name: 'index',
      uiSref: dashboardUiSref + 'index',
      templateUrl: dashboardTemplatePath + 'dashboard.html',
      controller: 'dashboardIndexController',
      controllerUrl: dashboardTemplatePath + 'ngController'
    }
  ];

  var cardRouter = [
    {
      title: 'Card Dashboard',
      name: 'dashboard',
      uiSref: cardUiSref + 'dashboard',
      templateUrl: cardTemplatePath + 'dashboard/index.html',
      controller: 'CardDashboardController',
      controllerUrl: cardTemplatePath + 'dashboard/controller'
    },
  ];

  var crawlRouter = [
    {
      title: 'Crawl Ltaaa',
      name: 'ltaaa',
      params: ':id',
      uiSref: crawlUiSref + 'ltaaa',
      templateUrl: crawlTemplatePath + 'ltaaa/index.html',
      controller: 'CrawlLtaaaController',
      controllerUrl: crawlTemplatePath + 'ltaaa/controller'
    },
    {
      title: 'Crawl Hot News',
      name: 'hotnews',
      params: ':id',
      uiSref: crawlUiSref + 'hotnews',
      templateUrl: crawlTemplatePath + 'hotnews/index.html',
      controller: 'CrawlHotnewsController',
      controllerUrl: crawlTemplatePath + 'hotnews/controller'
    }
  ];

  var designRouter = [
    {
      title: 'Design Closet',
      name: 'closet',
      params: ':id',
      uiSref: designUiSref + 'closet',
      templateUrl: designTemplatePath + 'closet/index.html',
      controller: 'DesignClosetController',
      controllerUrl: designTemplatePath + 'closet/controller'
    }
  ];

  var docsRouter = [
    {
      title: 'Document Subject',
      name: 'subject',
      params: ':id',
      uiSref: docsUiSref + 'subject',
      templateUrl: docsTemplatePath + 'subject/index.html',
      controller: 'DocsSubjectController',
      controllerUrl: docsTemplatePath + 'subject/controller'
    }, {
      title: 'Document Wiki',
      name: 'wiki',
      params: ':id',
      uiSref: docsUiSref + 'wiki',
      templateUrl: docsTemplatePath + 'wiki/index.html',
      controller: 'DocsWikiController',
      controllerUrl: docsTemplatePath + 'wiki/controller'
    }
  ];

  var mediaRouter = [
    {
      title: 'Media Video',
      name: 'video',
      params: ':id',
      uiSref: mediaUiSref + 'video',
      templateUrl: mediaTemplatePath + 'video/index.html',
      controller: 'MediaVideoController',
      controllerUrl: mediaTemplatePath + 'video/controller'
    }
  ];

  var monitorRouter = [
    {
      title: 'Monitor CPU',
      name: 'cpu',
      params: ':id',
      uiSref: monitorUiSref + 'cpu',
      templateUrl: monitorTemplatePath + 'cpu/index.html',
      controller: 'MonitorCPUController',
      controllerUrl: monitorTemplatePath + 'cpu/controller'
    }
  ];

  var taskRouter = [
    {
      title: 'Task Detail',
      name: 'detail',
      params: ':id',
      uiSref: taskUiSref + 'detail',
      templateUrl: taskTemplatePath + 'detail/index.html',
      controller: 'TaskDetailController',
      controllerUrl: taskTemplatePath + 'detail/controller'
    },
    {
      title: 'Media Type',
      name: 'type',
      params: ':id',
      uiSref: taskUiSref + 'type',
      templateUrl: taskTemplatePath + 'type/index.html',
      controller: 'TaskMediaTypeController',
      controllerUrl: taskTemplatePath + 'type/controller'
    },
    {
      title: 'Note',
      name: 'note',
      params: ':id',
      uiSref: taskUiSref + 'note',
      templateUrl: taskTemplatePath + 'note/index.html',
      controller: 'TaskNoteController',
      controllerUrl: taskTemplatePath + 'note/controller'
    }
  ];
  var routes = [
    dashboardRouter,
    cardRouter,
    crawlRouter,
    designRouter,
    docsRouter,
    mediaRouter,
    monitorRouter,
    taskRouter
  ];
  var states = [{
    url: 'blog',
    title: 'Blog',
    templateUrl: templatePath
  }, {
    url: 'card',
    title: 'Card',
    templateUrl: templatePath
  }, {
    url: 'crawl',
    title: 'Crawl',
    templateUrl: templatePath
  }, {
    url: 'dashboard',
    title: 'Dashboard',
    templateUrl: templatePath
  }, {
    url: 'design',
    title: 'Design',
    templateUrl: templatePath
  }, {
    url: 'docs',
    title: 'Docs',
    templateUrl: templatePath
  }, {
    url: 'media',
    title: 'Media',
    templateUrl: templatePath
  }, {
    url: 'task',
    title: 'Task',
    templateUrl: templatePath
  }, {
    url: 'monitor',
    title: 'Monitor',
    templateUrl: templatePath
  }];

  adminApp.config(['generateProvider', function(generateProvider) {
    angular.forEach(states, function(state) {
      generateProvider.state(state);
    });
    angular.forEach(routes, function(subRoutes) {
      angular.forEach(subRoutes, function(route) {
        generateProvider.router(route);
      });
    });
  }]);
});
