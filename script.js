setInterval(function() {
    document.getElementById('carouselExample').carousel('next');
  }, 10000);

  function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
}

window.onload = function() {
        // Reset the form fields when the page loads
        document.getElementById("form").reset();
    };
