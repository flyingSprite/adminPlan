'use strict';

var $injector = angular.injector();

// Those are true.
expect($injector.get('$injector')).toBe($injector);
expect($injector.invoke(function($injector) {
  return $injector;
})).toBe($injector);
