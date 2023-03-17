document.addEventListener("DOMContentLoaded", function() {
   var carousel = document.querySelector(".carousel");
   var pausePlayFunctionallity = document.querySelector("#Portfolio_carousel_pause_play_function");
   var carouselPausePlayIcon = pausePlayFunctionallity.children[0];
 
   var interval = 2000;
   var pause = false;
 
   var carouselInterval = setInterval(function() {
     if (!pause) {
       carousel.nextElementSibling.click();
     }
   }, interval);
 
   pausePlayFunctionallity.addEventListener("click", function() {
     if (carouselPausePlayIcon.classList.contains("fa-pause")) {
       clearInterval(carouselInterval);
       pause = true;
       carouselPausePlayIcon.classList.remove("fa-pause");
       carouselPausePlayIcon.classList.add("fa-play");
     } else {
       carouselInterval = setInterval(function() {
         if (!pause) {
           carousel.nextElementSibling.click();
         }
       }, interval);
       pause = false;
       carouselPausePlayIcon.classList.remove("fa-play");
       carouselPausePlayIcon.classList.add("fa-pause");
     }
   });
 });
 