const videos = document.querySelectorAll('video');

videos.forEach(function(video) {
  video.addEventListener('click', function() {
    if (!video.paused) {
      videos.forEach(function(video) {
        video.pause();
      });
    } else {
      videos.forEach(function(video) {
        video.play();
      });
    }
  });
});
