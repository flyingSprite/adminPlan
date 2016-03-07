define(function () {
  var tempatePath = 'container/card/';
  var defaultUiSref = 'main.card.';
  return [
    {
      title: 'Card Dashboard',
      name: 'cardDashboard',
      uiSref: defaultUiSref + 'dashboard',
      templateUrl: tempatePath + 'dashboard/index.html',
      controller: 'CardDashboardController',
      controllerUrl: tempatePath + 'dashboard/controller'
    },
  ];
});