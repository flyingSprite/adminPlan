define(["adminApp","config"],function(e,r){var t=r.rootPath+"container/task/",l="main.task.",o=[{title:"Task Detail",name:"detail",params:":id",uiSref:l+"detail",templateUrl:t+"detail/index.html",controller:"TaskDetailController",controllerUrl:t+"detail/controller"},{title:"Media Type",name:"type",params:":id",uiSref:l+"type",templateUrl:t+"type/index.html",controller:"TaskMediaTypeController",controllerUrl:t+"type/controller"},{title:"Note",name:"note",params:":id",uiSref:l+"note",templateUrl:t+"note/index.html",controller:"TaskNoteController",controllerUrl:t+"note/controller"}];e.config(["$urlRouterProvider","$requireProvider","generateProvider",function(e,r,t){angular.forEach(o,function(e){t.router(e)})}])});