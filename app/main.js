'user strict'

require.config({
  baseUrl: "",
  paths:{
    'angular': '../bower_components/angular/angular',
    'angular-animate': '../bower_components/angular-animate/angular-animate.min',
    'angular-aria': '../bower_components/angular-aria/angular-aria.min',
    'angular-masonry': '../bower_components/angular-masonry/angular-masonry',
    'angular-material': '../bower_components/angular-material/angular-material.min',
    'angular-pagtinate': '../bower_components/angular-paginate-anything/dist/paginate-anything-tpls.min',
    'angular-translate': '../bower_components/angular-translate/angular-translate.min',
    'angular-ui-router': '../bower_components/angular-ui-router/release/angular-ui-router',
    'codemirror': '../bower_components/codemirror/lib/codemirror',
    'd3': '../bower_components/d3/d3.min',
    'domReady': '../bower_components/requirejs-domready/domReady',
    'marked': '../bower_components/marked/marked.min',
    'moment': '../bower_components/moment/min/moment.min',
    'paginate': 'templates/directive/paginate',
    'Raphael': '../bower_components/raphael/raphael-min',
    'ui-codemirror': '../bower_components/angular-ui-codemirror/ui-codemirror.min',

    // angular-require support domand loading.
    'ngRequire': 'static/lib/angular-require',
    'worldmap': 'static/lib/world',

    'ap-directive-module': 'templates/directive/directive',
    'ap-directive': 'templates/directive/pagination/controller',
    'ap-directive-horizontal': 'templates/directive/horizontal/controller',
    'ap-item-article': 'templates/directive/item/controller',

    'config': 'config',
    'adminApp': 'adminApp'
  },
  shim: {
    'angular-animate': ['angular'],
    'angular-aria': ['angular'],
    'angular-masonry': ['angular'],
    'angular-material': ['angular', 'angular-animate', 'angular-aria'],
    'angular-pagtinate': ['angular'],
    'angular-translate': ['angular'],
    'angular-ui-router': ['angular-translate'],

    'ap-directive-module': ['angular'],
    'ap-item-article': ['ap-directive-module'],
    'ap-directive-horizontal': ['ap-directive-module'],
    'ap-directive': ['ap-directive-horizontal', 'ap-item-article'],

    'ngRequire': ['angular-ui-router'],
    'ui-codemirror': ['angular', 'codemirror']
  },
  deps: ['bootstrap']
});
