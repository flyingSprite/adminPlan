define(function () {
  var tempatePath = 'container/record/';
  var defaultUiSref = 'main.record.';
  return [
    {
      title: 'Record Edit',
      name: 'recordEdit',
      uiSref: defaultUiSref + 'edit',
      templateUrl: tempatePath + 'edit/index.html',
      controller: 'RecordEditController',
      controllerUrl: tempatePath + 'edit/controller'
    },
    {
      title: 'Record List',
      name: 'recordList',
      uiSref: defaultUiSref + 'list',
      templateUrl: tempatePath + 'list/index.html',
      controller: 'RecordListController',
      controllerUrl: tempatePath + 'list/controller'
    },
    {
      title: 'Editor',
      name: 'editor',
      uiSref: defaultUiSref + 'editor',
      templateUrl: tempatePath + 'editor/index.html',
      controller: 'EditorController',
      controllerUrl: tempatePath + 'editor/controller'
    }
  ];
});