
/* jshint esversion: 6 */

// Fade in animation for social media page and video frame on home page.
$(document).ready(function(){
  $(".social, .video-frame").hide();
  $(".social, .video-frame").css({ opacity: 1.0 });
  $(".social, .video-frame").fadeIn(2000);
});
