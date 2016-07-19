
/** All server api will define in here. */
define('api', ['adminApp'], function (adminApp) {
  adminApp.service('api', ['adminHttp', function (adminHttp) {

    /** Get count for dashboard. */
    this.count = function(success, error) {
      adminHttp({method: 'GET', url: '/dashboard/count'})
      .success(function(count){
        count && success && success(count);
      })
      .error(function (err) {
        error && error(err);
      });
    };
  }]);
});