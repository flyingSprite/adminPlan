define(["adminApp","moment"],function(t,n){t.controller("DesignClosetController",["$scope","$state","$anchorScroll","$location","breadcrumb","notification","util","api",function(t,o,i,e,c,a,s,l){var h=this;h.moment=n,h.showNotification=function(){a.notice("This is a test!")},h.data={content:""},h.list=[],h.hotnews=[],l.hotnews(function(t){console.log(t),h.hotnews.lenght=0,h.hotnews=h.hotnews.concat(t)}),h.submit=function(){if(!s.isNull(h.data.content)){var t={content:h.data.content};h.list.push(t),h.data.content=""}}}])});