const videos = document.querySelectorAll('video');

videos.forEach(function(video) {
  video.addEventListener('play', function() {
    videos.forEach(function(otherVideo) {
      if (otherVideo !== video && otherVideo.paused) {
        otherVideo.play();
      }
    });
  });
});


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
