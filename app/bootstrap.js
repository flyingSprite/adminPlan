

define(['require', 'angular', 'app'], function (require){
  'use strict';

  require(['domReady!'], function (document) {
    angular.bootstrap(document, ['app']);
  });
});
