define(['adminApp', 'marked', 'angular', 'angular-ui-router'], function (adminApp, marked) {

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
        markurl: '@'
      },
      template: '<div ng-bind-html="markdownHtml"></div>',
      controller: function ($scope, $sce, $http) {
        $http.get($scope.markurl)
          .success(function(data) {
            $scope.markdownHtml = $sce.trustAsHtml(marked(data));
          });
      }
    }
  })
  .service('socket', function (logging) {
    var socket = new WebSocket('ws://localhost:8080/solutions/point');
    var self = this;
    var temporyList = [];
    socket.onopen = function (){

      self.connectSuccess = true;
      angular.forEach(temporyList, function(value){
        socket.send(value);
      });
      temporyList.length = 0;
    }

    socket.onmessage = function(event){
      logging.log(event.data);
    }



    this.send = function (data) {
      if(self.connectSuccess){
        socket.send(data);
      } else {
        temporyList.push(data);
        logging.warn("Web Socket is connecting ... ");
      }
    }

  });

});