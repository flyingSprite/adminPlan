

define('bootstrap', ['angular-all', 'app'], function (){
  'use strict';

  require(['domReady!'], function (document) {
    // This ngApp must be angular.module('ngApp', [])
    angular.bootstrap(document, ['ngApp']);
  });
});
