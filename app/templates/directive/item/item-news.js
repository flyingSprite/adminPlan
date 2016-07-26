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
        newHref: '@'
      },
      template: '<div class="item-info item-info-light">'
        + '<span class="label label-primary">'
        + '<a class="shades-text text-white" href="{{ websiteUrl }}" target="_black">{{ website }}</a>'
        + '</span>'
        + '&nbsp;{{ date }}&nbsp;'
        + '<a href="{{ newHref }}" target="">{{ name }}</a>'
        + '</div>',
      controller: ['$scope', function() {
      }]
    };
  });
});
