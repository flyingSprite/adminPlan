define(["adminApp","media"],function(e,o){e.controller("MediaVideoController",["$state","breadcrumb",function(e,n){n("Video",[{name:"Media",link:"main.media.video"},{name:"Video",link:"main.media.video"}]),console.log(o),o(!0,!0,function(e){console.log(e),console.log(document.getElementById("video-demo")),document.getElementById("video-demo").src=e})}])});