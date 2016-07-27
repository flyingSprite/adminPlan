'use strict';

define('item-news', ['adminApp'], function(adminApp) {

  adminApp.directive('apItemNews', function () {
    return {
      restrict: 'E',
      scope: {
        website: '@',
        websiteUrl: '@',
        name: '@',
        date: '@',
        newsHref: '@'
      },
      template: '<div class="item-news">'
        + '<div>'
        + '  <span class="label label-primary">'
        + '    <a class="site-link" href="{{ websiteUrl }}" target="_black">{{ website }}</a>'
        + '  </span>'
        + '  <div class="pull-right">'
        + '    <i class="fa fa-clock-o" aria-hidden="true"></i>&nbsp;{{ date }}'
        + '  </div>'
        + '</div>'
        + '<div class="title">'
        + '  <a href="{{ newsHref }}" target="_black">{{ name }}</a>'
        + '</div>'
        + '</div>',
      controller: ['$scope', function() {
      }]
    };
  });
});
