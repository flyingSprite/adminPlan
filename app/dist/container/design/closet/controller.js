define(["adminApp","moment","ap-charts"],function(s){s.controller("DesignClosetController",["$scope","$timeout",function(s,r){function o(){e.setProgress(),r(o,500)}var e=this;e.progressNum=0,e.setProgress=function(){e.progressNum>=100?e.progressNum=0:e.progressNum=e.progressNum+5},o()}])});