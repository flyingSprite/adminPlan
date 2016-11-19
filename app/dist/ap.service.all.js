
/** All server api will define in here. */
define('api', ['adminApp', 'config'], function (adminApp, config) {
  adminApp
  .factory('adminHttp', ['$http', function ($http){
    $http.defaults.useXDomain = true;
    var serverUrl = config.serverHost + config.namespace;
    // var serverUrl = 'http://www.duastone.com/solutions';
    return function (config){
      if(config.method.toUpperCase() == 'POST'
        || config.method.toUpperCase() == 'PUT'
        || config.method.toUpperCase() == 'DELETE') {
        return $http({
          url: serverUrl + config.url,
          method: config.method.toUpperCase(),
          headers: {
            'Content-Type': 'application/json'
          },
          // transformRequest : function(data){
          //   if (data === undefined) {
          //     return data;
          //   }
          //   return $.param(data);
          // },
          data: config.data
        });
      } else if (config.method.toUpperCase() == 'GET') {
        return $http({
          url: serverUrl + config.url,
          method: 'GET',
          data: config.data
        });
      }
    };
  }])
  .service('api', ['adminHttp', function (adminHttp) {

    var o = function(options, success, error) {
      adminHttp(options)
      .success(function(res){
        res && success && success(res);
      })
      .error(function(err) {
        err && error && error(err);
      });
    };
    /** Get count for dashboard. */
    this.count = function(success, error) {
      adminHttp({method: 'GET', url: '/dashboard/count'})
      .success(function(count){
        count && success && success(count);
      })
      .error(function(err) {
        err && error && error(err);
      });
    };

    this.hotnews = function(success, error) {
      adminHttp({method: 'GET', url: '/hotnews'})
      .success(function(hotnews) {
        hotnews && success && success(hotnews);
      })
      .error(function(err) {
        err && error && error(err);
      });
    };

    this.lastTenCpuMonitor = function(success, error) {
      adminHttp({method: 'GET', url: '/cms'})
      .success(function(hotnews) {
        hotnews && success && success(hotnews);
      })
      .error(function(err) {
        err && error && error(err);
      });
    };

    this.missionList = function(success, error) {
      adminHttp({method: 'GET', url: '/mission'})
      .success(function(missions) {
        missions && success && success(missions);
      })
      .error(function(err) {
        err && error && error(err);
      });
    };

    this.missionAdd = function(mission, success, error) {
      adminHttp({method: 'POST', url: '/mission', data: mission})
      .success(function(missions) {
        missions && success && success(missions);
      })
      .error(function(err) {
        err && error && error(err);
      });
    };

    this.missionUpdate = function(mission, success, error) {
      adminHttp({method: 'PUT', url: '/mission', data: mission})
      .success(function(missions) {
        missions && success && success(missions);
      })
      .error(function(err) {
        err && error && error(err);
      });
    };

    this.missionDelete = function(id, success, error) {
      adminHttp({method: 'DELETE', url: '/mission', data: {id: id}})
      .success(function(res) {
        res && success && success(res);
      })
      .error(function(err) {
        err && error && error(err);
      });
    };

    this.label = {
      get: function(categoryId, success, error) {
        o({method: 'GET', url: '/label?categoryId=' + categoryId}, success, error);
      },
      post: function(label, success, error) {
        o({method: 'POST', url: '/label', data: label}, success, error);
      },
      delete: function(id, success, error) {
        o({method: 'DELETE', url: '/label', data: {id: id}}, success, error);
      }
    };

    this.category = {
      get: function(success, error) {
        o({method: 'GET', url: '/category'}, success, error);
      },
      post: function(category, success, error) {
        o({method: 'POST', url: '/category', data: category}, success, error);
      },
      delete: function(id, success, error) {
        o({method: 'DELETE', url: '/category', data: {id: id}}, success, error);
      }
    };

    // Doc System interface api.
    this.doc = {
      getSubject: function(success, error) {
        o({method: 'GET', url: '/doc/subject'}, success, error);
      },
      getSubjectById: function(subjectId, success, error) {
        o({method: 'GET', url: '/doc/subject/id?subjectId=' + subjectId}, success, error);
      },
      postSubject: function(subject, success, error) {
        o({method: 'POST', url: '/doc/subject', data: subject}, success, error);
      },
      deleteSubject: function(subjectId, success, error) {
        o({method: 'DELETE', url: '/doc/subject', data: {id: subjectId}}, success, error);
      },
      getTitle: function(subjectId, success, error) {
        o({method: 'GET', url: '/doc/title?subjectId=' + subjectId}, success, error);
      },
      postTitle: function(title, success, error) {
        o({method: 'POST', url: '/doc/title', data: title}, success, error);
      },
      deleteTitle: function(titleId, success, error) {
        o({method: 'DELETE', url: '/doc/title', data: {id: titleId}}, success, error);
      },
      getContent: function(titleId, success, error) {
        o({method: 'GET', url: '/doc/content?titleId=' + titleId}, success, error);
      },
      postContent: function(content, success, error) {
        o({method: 'POST', url: '/doc/content', data: content}, success, error);
      },
      putContent: function(content, success, error) {
        o({method: 'PUT', url: '/doc/content', data: content}, success, error);
      },
    };

  }]);
});


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
  'util',
  'validator'
]);

define('initService', ['adminApp'], function (adminApp) {


  adminApp.service('InitService', ['$http', function ($http){
    this.config = function () {
      return $http({method: 'GET', url: '/config.json'});
    };
  }]);
  adminApp.service('logging', function(){
    this.info = function(args) {
      console.log(args);
    };

    this.warn = function(args) {
      console.warn(args);
    };

    this.err = function(args) {
      console.err(args);
    };
  });
  adminApp.service('socket', [ '$http', 'logging', function ($http) {
    $http.defaults.useXDomain = true;
    // var socket = new WebSocket('ws://localhost:8080/solutions/point');
    // var self = this;
    // var temporyList = [];
    // socket.onopen = function (){

    //   self.connectSuccess = true;
    //   angular.forEach(temporyList, function(value){
    //     socket.send(value);
    //   });
    //   temporyList.length = 0;
    // }

    // socket.onmessage = function(event){
    //   logging.info(event.data);
    // }

    // $http({
    //     url: 'http://localhost:8080/solutions/record',
    //     method: 'GET'
    //   }).then(function (data){
    //     console.log("====>", data);
    //   }).then(function (err){
    //     console.log(err);
    //   });



    this.send = function () {
      // if(self.connectSuccess){
      //   socket.send(data);
      // } else {
      //   temporyList.push(data);
      //   logging.warn("Web Socket is connecting ... ");
      // }
    };

  }]);

});


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
define('notification-service', ['adminApp'], function (adminApp) {
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
        if (permission === 'granted') {
          self.supportNotification = true;
        }
      });
    }

    self.notice = function(message) {
      if (self.supportNotification) {
        new Notification(message);
      }
    };
  });
});

/** Util service. */
define('util', ['adminApp'], function (adminApp) {

  adminApp
  .service('util', function () {

    /** Is undefined or '' */
    this.isNull = function(obj) {
      return obj === undefined || obj === '';
    };
  })
  .factory('GenerateUniqueId', function() {
    var generateUid = function() {
      // http://www.ietf.org/rfc/rfc4122.txt
      var d = new Date().getTime();
      var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (d + Math.random()*16)%16 | 0;
        d = Math.floor(d/16);
        return (c === 'x' ? r : (r&0x7|0x8)).toString(16);
      });
      return uuid;
    };
    return {
      next: function() { return generateUid(); }
    };
  })
  .factory('copyArray', function () {
    return function(source, from) {
      angular.forEach(from, function(o) {
        this.push(o);
      }, source);
    };
  })
  .factory('removeArrayById', [function () {
    return function(source, o) {
      for (var i = source.length - 1; i >= 0; i --) {
        if (source[i].id === o.id) {
          source.splice(i, 1);
        }
      }
    };
  }]);
});

/** Util service. */
define('validator', ['adminApp'], function (adminApp) {

  adminApp.factory('validator', function () {
    var regexpIpv4 = /^((?:2[0-5]{2}|1\d{2}|[1-9]\d|[1-9])\.(?:(?:2[0-5]{2}|1\d{2}|[1-9]\d|\d)\.){2}(?:2[0-5]{2}|1\d{2}|[1-9]\d|\d))$/;
    var regexpIpv4Netmask = /^((?:2[0-5]{2}|1\d{2}|[1-9]\d|[1-9])\.(?:(?:2[0-5]{2}|1\d{2}|[1-9]\d|\d)\.){2}(?:2[0-5]{2}|1\d{2}|[1-9]\d|\d)\/(\d|[1-2]\d|3[0-2]))$/;
    var regexpIpv4Port = /^((?:2[0-5]{2}|1\d{2}|[1-9]\d|[1-9])\.(?:(?:2[0-5]{2}|1\d{2}|[1-9]\d|\d)\.){2}(?:2[0-5]{2}|1\d{2}|[1-9]\d|\d)):(\d|[1-9]\d|[1-9]\d{2,3}|[1-5]\d{4}|6[0-4]\d{3}|654\d{2}|655[0-2]\d|6553[0-5])$/;

    var validates = {
      ipv4: function(value) {
        return regexpIpv4.test(value);
      },
      'ipv4-netmask': function(value) {
        return regexpIpv4Netmask.test(value);
      },
      'ipv4-port': function(value) {
        return regexpIpv4Port.test(value);
      },
      ipv6: function(value) {
        return !!value;
      },
      'ipv6-netmask': function(value) {
        return !!value;
      },
      email: function(value) {
        return !!value;
      }
    };
    return function(command, value) {
      if (command && validates[command]) {
        return validates[command](value);
      }
      return false;
    };
  });
});
