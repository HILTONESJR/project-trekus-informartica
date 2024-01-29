setInterval(function() {
    document.getElementById('carouselExample').carousel('next');
  }, 10000);

  var locTopDiv = document.getElementById("locTopDiv");

  window.addEventListener("scroll", function() {
    locTopDiv.style.display = "none";
  });