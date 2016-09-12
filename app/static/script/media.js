
'use strict';
define(function() {
  return function(audio, video, getUrl){
    navigator.getUserMedia = navigator.getUserMedia ||
                           navigator.webkitGetUserMedia ||
                           navigator.mozGetUserMedia;
    if(navigator.getUserMedia) {
      navigator.getUserMedia({audio: audio, video: video}, function(stream) {
        getUrl && getUrl(URL.createObjectURL(stream));
      }, function(err) {
        console.log(err);
      });
    }
  };
});
