define(function () {
  var tempatePath = 'container/record/';
  var defaultUiSref = 'main.record.';
  return [
    // {
    //   title: 'Record Edit',
    //   name: 'recordEdit',
    //   params: ':id',
    //   uiSref: defaultUiSref + 'edit',
    //   templateUrl: tempatePath + 'edit/index.html',
    //   controller: 'RecordEditController',
    //   controllerUrl: tempatePath + 'edit/controller'
    // },
    {
      title: 'Record List',
      name: 'recordList',
      params: ':id',
      uiSref: defaultUiSref + 'list',
      templateUrl: tempatePath + 'list/index.html',
      controller: 'RecordListController',
      controllerUrl: tempatePath + 'list/controller'
    },
    {
      title: 'Editor',
      name: 'editor',
      params: ':id',
      uiSref: defaultUiSref + 'editor',
      templateUrl: tempatePath + 'editor/index.html',
      controller: 'EditorController',
      controllerUrl: tempatePath + 'editor/controller'
    },
    {
      title: 'Record Info',
      name: 'info',
      params: ':id',
      uiSref: defaultUiSref + 'info',
      templateUrl: tempatePath + 'info/index.html',
      controller: 'RecordInfoController',
      controllerUrl: tempatePath + 'info/controller'
    }
  ];
});