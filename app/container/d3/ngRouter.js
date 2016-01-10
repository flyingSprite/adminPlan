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
    }
  ];
});