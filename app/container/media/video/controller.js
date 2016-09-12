define(['adminApp', 'media'], function (adminApp) {
  adminApp.controller('MediaVideoController', [
    '$state', 'breadcrumb', function($state, breadcrumb){
      breadcrumb('Video', [{
        name: 'Media',
        link: 'main.media.video'
      }, {
        name: 'Video',
        link: 'main.media.video'
      }]);
      var vi = document.getElementById('video-demo');
      navigator.getUserMedia = navigator.getUserMedia ||
                           navigator.webkitGetUserMedia ||
                           navigator.mozGetUserMedia;
      if(navigator.getUserMedia) {
        navigator.getUserMedia({audio: true, video: true}, function(stream) {
          vi.src = URL.createObjectURL(stream);
        }, function(err) {
          console.log(err);
        });
      }
    }
  ]);
});
