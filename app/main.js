'user strict'

require.config({
  baseUrl: "",
  paths:{
    'angular': '../bower_components/angular/angular',
    'angular-translate': '../bower_components/angular-translate/angular-translate.min',
    'angular-ui-router': '../bower_components/angular-ui-router/release/angular-ui-router',
    'd3': '../bower_components/d3/d3.min',
    'domReady': '../bower_components/requirejs-domready/domReady',
    'marked': '../bower_components/marked/marked.min',
    'Raphael': '../bower_components/raphael/raphael-min',

    'ngRequire': 'static/lib/angular-require',
    'worldmap': 'static/lib/world',

    'adminApp': 'adminApp'
  },
  shim: {
    'angular-translate': ['angular'],
    'angular-ui-router': ['angular-translate'],
    'ngRequire': ['angular-ui-router']
  },
  deps: ['bootstrap']
});