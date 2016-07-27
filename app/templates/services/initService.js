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
    var serverUrl = 'http://' + config.serverHost + '/solutions';
    // var serverUrl = 'http://www.duastone.com/solutions';
    return function (config){
      if(config.method.toUpperCase() == 'POST' || config.method.toUpperCase() == 'PUT') {
        return $http({
          url: serverUrl + config.url,
          method: config.method.toUpperCase(),
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          transformRequest : function(data){
            if (data === undefined) {
              return data;
            }
            return $.param(data);
          },
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
