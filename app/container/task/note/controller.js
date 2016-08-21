define(['adminApp', 'ap-charts'], function (adminApp) {
  adminApp.controller('TaskNoteController', [
    '$state', 'breadcrumb', function($state, breadcrumb){
      breadcrumb('Note', [{
        name: 'Task',
        link: 'main.task.detail'
      }, {
        name: 'Note',
        link: 'main.task.note'
      }]);
    }
  ]);
});
