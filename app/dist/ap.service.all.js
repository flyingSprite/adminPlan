
/** All server api will define in here. */
define('api', ['adminApp'], function (adminApp) {
  adminApp.service('api', ['adminHttp', function (adminHttp) {

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
  'util'
]);

define('initService', ['adminApp', 'config', 'marked', 'angular', 'angular-ui-router'], function (adminApp, config, marked) {

  adminApp.service('InitService', function ($http){
    this.config = function () {
      return $http({method: 'GET', url: '/config.json'});
    };
  })
  .service('logging', function(){
    this.info = function(args) {
      console.log(args);
    };

    this.warn = function(args) {
      console.warn(args);
    };

    this.err = function(args) {
      console.err(args);
    };
  })
  .directive('markd', function () {
    return {
      restrict: 'E',
      replace: true,
      scope: {
        markurl: '@',
        markData: '@'
      },
      template: '<div ng-bind-html="markdownHtml"></div>',
      controller: function ($scope, $sce, $http) {
        marked.setOptions({
          highlight: function (code) {
            return hljs.highlightAuto(code).value;
          }
        });
        if ($scope.markData != undefined) {
          $scope.markdownHtml = $sce.trustAsHtml(marked($scope.markData));
          $scope.$watch(function () {
            return $scope.markData;
          }, function () {
            $scope.markdownHtml = $sce.trustAsHtml(marked($scope.markData));
          });
        }

        if($scope.markData == undefined || $scope.markurl != undefined){
          $http.get($scope.markurl)
            .success(function(data) {
              $scope.markdownHtml = $sce.trustAsHtml(marked(data));
            });
        }
      }
    };
  })
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
  .service('socket', [ '$http', 'logging', function ($http) {
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
  });
});