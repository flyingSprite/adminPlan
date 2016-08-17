
/** Show message box. */
define('message-box', ['adminApp'], function (adminApp) {

  adminApp
  .factory('messageBox', [function () {

    $.notify.defaults({
      autoHide: true,
      autoHideDelay: 2000
    });

    // More detail see https://notifyjs.com/
    // type: success, info, warn, error
    return function(type, message) {
      $.notify(message, type);
    };
  }]);
});