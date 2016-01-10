define(function () {
  var tempatePath = 'container/d3/';
  var defaultUiSref = 'main.d3.';
  return [
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
    }
  ];
});