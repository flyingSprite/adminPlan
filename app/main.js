'user strict'

require.config({
  baseUrl: "",
  paths:{
    'angular': '../bower_components/angular/angular',
    'angular-animate': '../bower_components/angular-animate/angular-animate.min',
    'angular-aria': '../bower_components/angular-aria/angular-aria.min',
    'angular-material': '../bower_components/angular-material/angular-material.min',
    'angular-translate': '../bower_components/angular-translate/angular-translate.min',
    'angular-ui-router': '../bower_components/angular-ui-router/release/angular-ui-router',
    'codemirror': '../bower_components/codemirror/lib/codemirror',
    'd3': '../bower_components/d3/d3.min',
    'domReady': '../bower_components/requirejs-domready/domReady',
    'marked': '../bower_components/marked/marked.min',
    'moment': '../bower_components/moment/min/moment.min',
    'Raphael': '../bower_components/raphael/raphael-min',
    'ui-codemirror': '../bower_components/angular-ui-codemirror/ui-codemirror.min',

    // angular-require support domand loading.
    'ngRequire': 'static/lib/angular-require',
    'worldmap': 'static/lib/world',

    'adminApp': 'adminApp'
  },
  shim: {
    'angular-animate': ['angular'],
    'angular-aria': ['angular'],
    'angular-material': ['angular', 'angular-animate', 'angular-aria'],
    'angular-translate': ['angular'],
    'angular-ui-router': ['angular-translate'],
    'ngRequire': ['angular-ui-router'],
    'ui-codemirror': ['angular', 'codemirror']
  },
  deps: ['bootstrap']
});