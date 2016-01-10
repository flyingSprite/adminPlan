

define(['require', 'angular', 'angular', 'app'], function (require){
  'use strict';

  require(['domReady!'], function (document) {
    // This ngApp must be angular.module('ngApp', [])
    angular.bootstrap(document, ['ngApp']);
  });
});
