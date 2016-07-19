define(['adminApp'], function (adminApp) {
  var tempatePath = 'container/d3/';
  var defaultUiSref = 'main.d3.';
  var ngRouter = [
    {
      title: 'Center Point',
      name: 'centerPoint',
      uiSref: defaultUiSref + 'centerPoint',
      templateUrl: tempatePath + 'centerPoint/index.html',
      controller: 'D3CenterPointController',
      controllerUrl: tempatePath + 'centerPoint/controller'
    },
    {
      title: 'Beat Point',
      name: 'beatPoint',
      uiSref: defaultUiSref + 'beatPoint',
      templateUrl: tempatePath + 'beatPoint/index.html',
      controller: 'D3BeatPointController',
      controllerUrl: tempatePath + 'beatPoint/controller'
    },
    {
      title: 'Load SVG',
      name: 'loadSVG',
      uiSref: defaultUiSref + 'loadSVG',
      templateUrl: tempatePath + 'loadSVG/index.html',
      controller: 'D3LoadSVGController',
      controllerUrl: tempatePath + 'loadSVG/controller'
    },
    {
      title: 'Draw Spider Web',
      name: 'drawSpiderWeb',
      uiSref: defaultUiSref + 'drawSpiderWeb',
      templateUrl: tempatePath + 'drawSpiderWeb/index.html',
      controller: 'D3DrawSpiderWebController',
      controllerUrl: tempatePath + 'drawSpiderWeb/controller'
    },
    {
      title: 'Drag Spider Web',
      name: 'dragSpiderWeb',
      uiSref: defaultUiSref + 'dragSpiderWeb',
      templateUrl: tempatePath + 'dragSpiderWeb/index.html',
      controller: 'D3DragSpiderWebController',
      controllerUrl: tempatePath + 'dragSpiderWeb/controller'
    },
    {
      title: 'Zoom Spider Web',
      name: 'zoomSpiderWeb',
      uiSref: defaultUiSref + 'zoomSpiderWeb',
      templateUrl: tempatePath + 'zoomSpiderWeb/index.html',
      controller: 'D3ZoomSpiderWebController',
      controllerUrl: tempatePath + 'zoomSpiderWeb/controller'
    }
  ];
  adminApp.config(function ($stateProvider, $urlRouterProvider, $requireProvider) {

    /**
     * value pattern:
     * {
     *   name: "centerPoint",
     *   tempateUrl: "views/d3/centerPoint/index.html",
     *   controller: "D3CenterPointController",
     *   controllerUrl: "views/d3/centerPoint/controller"
     * }
     *
     */
    angular.forEach(ngRouter, function (value, index) {
      $stateProvider
      .state(value.uiSref, {
        url: '/' + value.name,
        templateUrl: value.templateUrl,
        controller: value.controller,
        controllerAs: 'ctrl',
        resolve: {
          deps: $requireProvider.requireJS([value.controllerUrl])
        }
      });
    });
  });

});