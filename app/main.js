'user strict';

require.config({
  baseUrl: '',
  paths:{
    'angular': '../bower_components/angular/angular.min',
    'angular-animate': '../bower_components/angular-animate/angular-animate.min',
    'angular-aria': '../bower_components/angular-aria/angular-aria.min',
    'angular-masonry': '../bower_components/angular-masonry/angular-masonry',
    'angular-translate': '../bower_components/angular-translate/angular-translate.min',
    'angular-ui-router': '../bower_components/angular-ui-router/release/angular-ui-router.min',
    'codemirror': '../bower_components/codemirror/lib/codemirror',
    'css': '../bower_components/require-css/css.min',
    'd3': '../bower_components/d3/d3.min',
    'domReady': '../bower_components/requirejs-domready/domReady',
    'highcharts': '../bower_components/highcharts/highcharts',
    'highlightjs': '../bower_components/highlightjs/highlight.pack.min',
    'jquery': '../bower_components/jquery/dist/jquery.min',
    'marked': '../bower_components/marked/marked.min',
    'media': 'static/script/media',
    'moment': '../bower_components/moment/min/moment.min',
    'pnotify': 'static/lib/pnotify/pnotify.custom.min',
    'pnotify-css': 'static/lib/pnotify/pnotify.custom.min',
    'Raphael': '../bower_components/raphael/raphael-min',
    'ui-codemirror': '../bower_components/angular-ui-codemirror/ui-codemirror.min',

    // Bootstrap
    'angular-bootstrap-toggle-switch': '../bower_components/angular-bootstrap-toggle-switch/angular-toggle-switch.min',

    // angular-require support domand loading.
    'ngRequire': 'static/lib/angular-require',
    'worldmap': 'static/lib/world',

    'ap-service': 'dist/ap.service.all.min',
    // 'ap-service': 'templates/services/index',
    'ap-directive': 'dist/ap.directive.all.min',
    'ap-charts': 'dist/ap.charts.all.min',

    // 'ap-directive-module': 'templates/directive/directive',
    // 'ap-directive': 'templates/directive/pagination/controller',
    // 'ap-directive-horizontal': 'templates/directive/horizontal/controller',
    // 'ap-item-article': 'templates/directive/item/controller',

    'config': 'config',
    'adminApp': 'adminApp'
  },
  shim: {
    'angular-animate': ['angular'],
    'angular-aria': ['angular'],
    'angular-bootstrap-toggle-switch': ['angular'],
    'angular-masonry': ['angular'],
    'angular-translate': ['angular'],
    'angular-ui-router': ['angular-translate'],
    'pnotify': ['css!pnotify-css'],

    // 'ap-directive-module': ['angular'],
    // 'ap-item-article': ['ap-directive-module'],
    // 'ap-directive-horizontal': ['ap-directive-module'],
    // 'ap-directive': ['ap-directive-horizontal', 'ap-item-article'],

    'ap-directive': ['angular'],
    'ap-service': ['angular'],
    'ap-charts': ['highcharts'],

    'highlightjs': {exports: 'hljs'},

    'ngRequire': ['angular-ui-router'],
    'ui-codemirror': ['angular', 'codemirror']
  },
  deps: ['bootstrap']
});
