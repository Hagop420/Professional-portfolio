document.addEventListener("DOMContentLoaded", () => {
  var carousel = document.querySelector(".carousel");
  var pausePlayButton = document.querySelector("#Portfolio_carousel_pause_play_function");
  var pausePlayIcon = pausePlayButton.querySelector("i");
  var isPaused = false;

  // initialize the carousel
  var carouselInstance = new bootstrap.Carousel(carousel, {
    interval: 4800,
    pause: "false"
  });

  pausePlayButton.addEventListener("click", function() {
    if (pausePlayIcon.classList.contains("fa-pause")) {
      carouselInstance.pause();
      pausePlayIcon.classList.remove("fa-pause");
      pausePlayIcon.classList.add("fa-play");
    } else {
      carouselInstance.cycle();
      pausePlayIcon.classList.remove("fa-play");
      pausePlayIcon.classList.add("fa-pause");
    }
  });
});









 