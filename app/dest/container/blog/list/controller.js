define(["adminApp","moment"],function(t,o){t.controller("BlogListController",["$scope","$state","breadcrumb","adminHttp",function(t,n,i,e){function r(){e({method:"GET",url:"/blog"}).success(function(t){a.blogList.length=0,angular.forEach(t,function(t,o){t.currentDate=a.getDateFormat(t.currentDate),void 0==t.author&&(t.author="Quesle"),this.push(t)},a.blogList)}).error(function(t){})}var a=this;a.blogList=[],a.getInfo=function(t){n.go("main.blog.info",{data:{id:t},id:t})},a.editThisBlog=function(t){n.go("main.blog.editor",{id:t})},a.canEdit=!0,a.getDateFormat=function(t){return"number"!=typeof t&&(t=1455715613608),o(t).format("YYYY-MM-DD HH:mm:ss")},r()}])});