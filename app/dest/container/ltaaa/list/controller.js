define(["adminApp"],function(a){a.controller("LtaaaListController",["$scope","$state","$anchorScroll","$location","breadcrumb","adminHttp",function(a,e,t,n,r,p){function i(){n.hash("ltaaa-content"),t()}function g(){var a="/ltaaa?size="+o.pager.size+"&page="+o.pager.page;p({method:"GET",url:a}).success(function(a){o.ltaaaTitleList.length=0,a.data&&angular.forEach(a.data,function(a,e){this.push(a)},o.ltaaaTitleList),i()}).error(function(a){})}t.yOffset=100;var o=this;o.ltaaaTitleList=[],o.pager={total:0,page:0,size:20},o.prevPage=function(){o.pager.page=o.pager.page-1,o.pager.page=o.pager.page<0?0:o.pager.page,g()},o.nextPage=function(){o.pager.page=o.pager.page+1,g()},g()}])});