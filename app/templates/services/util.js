
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