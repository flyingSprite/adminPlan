
/** Show message box. */
define('message-box', ['adminApp'], function (adminApp) {

  adminApp
  .factory('messageBox', [function () {

    // More detail see https://notifyjs.com/
    // type: success, info, warn, error
    return function(type, message) {
      $.notify.defaults({
        autoHide: true,
        autoHideDelay: 2000
      });
      $.notify(message, type);
    };
  }]);
});