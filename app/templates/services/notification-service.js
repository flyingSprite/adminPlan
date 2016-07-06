define('notification-service', ['adminApp'],
  function (adminApp) {
  adminApp.service('notification', function () {
    var self = this;
    self.supportNotification = false;
    if (!('Notification' in window)) {
      self.supportNotification = false;
    }
    // Let's check whether notification permissions have already been granted
    else if (Notification.permission === 'granted') {
      self.supportNotification = true;
    }
    // Otherwise, we need to ask the user for permission
    else if (Notification.permission !== 'denied') {
      Notification.requestPermission(function (permission) {
        // If the user accepts, let's create a notification
        if (permission === "granted") {
          self.supportNotification = true;
        }
      });
    }

    self.notice = function(message) {
      if (self.supportNotification) {
        new Notification(message);
      }
    }
  });
});