
/**
 * Define a server use low wrap:
 * define('serviceName', ['a', 'b', 'c'], function () {});
 * then add like below:
 * require(['serviceName']);
 */
require([
  'initService',
  'api',
  'notification-service',
  'message-box',
  'util'
]);
