define(["adminApp","angular","angular-ui-router"],function(r){r.controller("breadcrumbController",["$scope","$state","breadcrumb","socket",function(r,e,t,u){u.send("sss");var b=this;b.breadcrumb=t,b.breadcrumb.title="Title",b.breadcrumb.subTitle="SubTitle",b.hideBreadCrumb=function(){return void 0==b.breadcrumb.list||0==b.breadcrumb.list.length},b.showTo=function(r){void 0!=r&&""!=r&&e.go(r)}}])});