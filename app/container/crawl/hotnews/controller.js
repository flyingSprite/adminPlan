define(['adminApp', 'moment'], function (adminApp, moment) {
  adminApp.controller('CrawlHotnewsController', [
    '$state', 'breadcrumb', 'api', function ($state, breadcrumb, api){
      breadcrumb('Hot News', [{
        name: 'Crawl',
        link: 'main.crawl.hotnews'
      }, {
        name: 'Hot News',
        link: 'main.crawl.hotnews'
      }]);

      var self = this;
      self.moment = moment;
      self.websites = {};
      api.hotnews(function(hotnews){
        setHotnewsByWebsite(hotnews);
      });
      function setHotnewsByWebsite(hotnews) {
        angular.forEach(hotnews, function(news) {
          var website = self.websites[news.website];
          if (website) {
            website.push(news);
          } else {
            self.websites[news.website] = [];
            self.websites[news.website].push(news);
          }
        });
      }
    }
  ]);
});
