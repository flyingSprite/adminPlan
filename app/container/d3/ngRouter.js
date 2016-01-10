define(function () {
  var tempatePath = 'container/d3/'
  return [
    {
      name: 'centerPoint',
      templateUrl: tempatePath + 'centerPoint/index.html',
      controller: 'D3CenterPointController',
      controllerUrl: tempatePath + 'centerPoint/controller'
    },
    {
      name: 'loadSVG',
      templateUrl: tempatePath + 'loadSVG/index.html',
      controller: 'D3LoadSVGController',
      controllerUrl: tempatePath + 'loadSVG/controller'
    },
    {
      name: 'drawSpiderWeb',
      templateUrl: tempatePath + 'drawSpiderWeb/index.html',
      controller: 'D3DrawSpiderWebController',
      controllerUrl: tempatePath + 'drawSpiderWeb/controller'
    }
  ];
});