define(['adminApp', 'config',
  './blog/ngRouter',
  './card/ngRouter',
  './crawl/ngRouter',
  './dashboard/ngRouter',
  './design/ngRouter',
  './monitor/ngRouter',
  './task/ngRouter',
  './docs/ngRouter'
], function (adminApp, config) {
  var templatePath = config.rootPath + 'container/ngTemplate.html';
  adminApp
  .config([ 'generateProvider', function(generateProvider) {
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
      url: 'task',
      title: 'Task',
      templateUrl: templatePath
    }, {
      url: 'monitor',
      title: 'Monitor',
      templateUrl: templatePath
    }];
    angular.forEach(states, function(state) {
      generateProvider.state(state);
    });
  }]);
});
