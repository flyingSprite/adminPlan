define(["adminApp","ui-codemirror"],function(t){t.controller("EditorController",["$scope","$http","$state","$stateParams","$mdToast","breadcrumb","adminHttp",function(t,o,e,i,n,l,d){function r(){var t=i.id;t&&d({method:"GET",url:"/blog/info?id="+t}).success(function(t){t?(b.isUpdateModel=!0,a(u,t,b.blog)):b.isUpdateModel=!1}).error(function(t){b.isUpdateModel=!1})}function a(t,o,e){if("object"==typeof t)for(obj in t)e[t[obj]]=o[t[obj]]}function c(){var t={bottom:!1,top:!0,center:!0,left:!1,right:!1};return Object.keys(t).filter(function(o){return t[o]}).join(" ")}function s(){var t=b.isUpdateModel?"Editor Success":"Create Success";n.show(n.simple().action("OK").textContent(t).position(c()).hideDelay(3e3))}var b=this;b.editorOptions={lineWrapping:!0,lineNumbers:!0,mode:"markdown"};var u=["id","title","type","content","currentDate"];b.blog={title:"",type:"",content:""},b.isUpdateModel=!1,b.submitBlog=function(){if(void 0!==b.blog&&void 0!==b.blog.title&&""!==b.blog.title){b.isUpdateModel&&(b.blog.isUpdate=!0);var t="POST";delete b.blog.lastUpdateDate,delete b.blog.currentDate,d({url:"/blog",data:b.blog,method:t}).success(function(t){s(),e.go("main.blog.list")})}},b.cancel=function(){b.isUpdateModel&&b.blog.id?e.go("main.blog.info",{id:b.blog.id}):e.go("main.blog.list")},r()}])});