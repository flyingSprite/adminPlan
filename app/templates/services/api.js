
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
