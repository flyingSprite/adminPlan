define(["adminApp","config"],function(r,e){var o=e.rootPath+"container/docs/",t="main.docs.",i=[{title:"Document Subject",name:"subject",params:":id",uiSref:t+"subject",templateUrl:o+"subject/index.html",controller:"DocsSubjectController",controllerUrl:o+"subject/controller"},{title:"Document Wiki",name:"wiki",params:":id",uiSref:t+"wiki",templateUrl:o+"wiki/index.html",controller:"DocsWikiController",controllerUrl:o+"wiki/controller"}];r.config(["$urlRouterProvider","$requireProvider","generateProvider",function(r,e,o){angular.forEach(i,function(r){o.router(r)})}])});