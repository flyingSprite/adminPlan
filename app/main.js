'user strict'

require.config({
  baseUrl: "",
  paths:{
    "domReady": "../bower_components/requirejs-domready/domReady",
    "angular": "../bower_components/angular/angular",
    "angular-ui-router": "../bower_components/angular-ui-router/release/angular-ui-router",
    'd3': '../bower_components/d3/d3.min'
  },
  shim: {
    'angular-ui-router': ['angular']
  },
  deps: ['bootstrap']
});