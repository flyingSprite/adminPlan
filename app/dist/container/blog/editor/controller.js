define(["adminApp","ui-codemirror"],function(t){t.controller("EditorController",["$scope","$http","$state","$stateParams","$mdToast","breadcrumb","adminHttp",function(t,o,e,i,n,l,d){function r(){var t=i.id;t&&d({method:"GET",url:"/blog/info?id="+t}).success(function(t){t?(u.isUpdateModel=!0,a(b,t,u.blog)):u.isUpdateModel=!1}).error(function(){u.isUpdateModel=!1})}function a(t,o,e){if("object"==typeof t)for(var i in t)e[t[i]]=o[t[i]]}function s(){var t={bottom:!1,top:!0,center:!0,left:!1,right:!1};return Object.keys(t).filter(function(o){return t[o]}).join(" ")}function c(){var t=u.isUpdateModel?"Editor Success":"Create Success";n.show(n.simple().action("OK").textContent(t).position(s()).hideDelay(3e3))}var u=this;u.editorOptions={lineWrapping:!0,lineNumbers:!0,mode:"markdown"};var b=["id","title","type","content","currentDate"];u.blog={title:"",type:"",content:""},u.isUpdateModel=!1,u.submitBlog=function(){if(void 0!==u.blog&&void 0!==u.blog.title&&""!==u.blog.title){u.isUpdateModel&&(u.blog.isUpdate=!0);var t=u.isUpdateModel?"PUT":"POST";delete u.blog.lastUpdateDate,delete u.blog.currentDate,console.log(u.blog),d({url:"/blog",data:u.blog,method:t}).success(function(){c(),e.go("main.blog.list")})}},u.cancel=function(){u.isUpdateModel&&u.blog.id?e.go("main.blog.info",{id:u.blog.id}):e.go("main.blog.list")},r()}])});