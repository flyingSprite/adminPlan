
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