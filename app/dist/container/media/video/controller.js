define(["adminApp","media"],function(e){e.controller("MediaVideoController",["$state","breadcrumb",function(e,i){i("Video",[{name:"Media",link:"main.media.video"},{name:"Video",link:"main.media.video"}]);var a=document.getElementById("video-demo");navigator.getUserMedia=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia,navigator.getUserMedia&&navigator.getUserMedia({audio:!0,video:!0},function(e){a.src=URL.createObjectURL(e)},function(e){console.log(e)})}])});