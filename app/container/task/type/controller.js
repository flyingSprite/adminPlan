define(['adminApp', 'ap-charts'], function (adminApp) {
  adminApp.controller('TaskMediaTypeController', [
    'breadcrumb', function(breadcrumb){
      breadcrumb('Media Type', [{
        name: 'Task',
        link: 'main.task.detail'
      }, {
        name: 'Media Type',
        link: 'main.task.type'
      }]);
    }
  ]);
});
