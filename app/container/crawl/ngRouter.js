define(['adminApp', 'config'], function (adminApp, config) {
  var templatePath = config.rootPath + 'container/crawl/';
  var defaultUiSref = 'main.crawl.';
  var ngRouter = [
    {
      title: 'Crawl Ltaaa',
      name: 'ltaaa',
      params: ':id',
      uiSref: defaultUiSref + 'ltaaa',
      templateUrl: templatePath + 'ltaaa/index.html',
      controller: 'CrawlLtaaaController',
      controllerUrl: templatePath + 'ltaaa/controller'
    },
    {
      title: 'Crawl Hot News',
      name: 'hotnews',
      params: ':id',
      uiSref: defaultUiSref + 'hotnews',
      templateUrl: templatePath + 'hotnews/index.html',
      controller: 'CrawlHotnewsController',
      controllerUrl: templatePath + 'hotnews/controller'
    }
  ];
  adminApp.config(['generateProvider', function (generateProvider) {
    angular.forEach(ngRouter, function (value) {
      generateProvider.router(value);
    });
  }]);
});
