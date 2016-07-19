
/** Util service. */
define('util', ['adminApp'], function (adminApp) {
  adminApp.service('util', function () {

    /** Is undefined or '' */
    this.isNull = function(obj) {
      return obj === undefined || obj === '';
    };
  });
});