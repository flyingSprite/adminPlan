
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
