/* first two functions all javascript */
function changeBgNavColour() {
  let navbar = document.getElementsByClassName('navbar').item(0);
  let scroll = document.getElementById('scroll');
  let y = scroll.scrollTop;

  if (y >= 50) {
    toggleNavBar("visible");
    navbar.style.backgroundColor = "rgba(250,250,250,0.5)";
  }else if (y < 100) {
    navbar.style.backgroundColor = "rgba(250,250,250,0.0)";
    toggleNavBar("hidden");
  }
}

/* function for toggling navbar visibility */
/* status must be equal to "hidden" or "visible" */
function toggleNavBar(status) {
  let left_of_menu = document.getElementsByClassName('navbar-item');
  for(item of left_of_menu) {
    item.style.visibility = status;
  }
}

/* jquery and javascript */
$(document).ready(function(){
  /* toggles visibility by clicking TOGGLE BARS when navbar collapsed */
  $(".navbar-toggler-icon").click(function(){
    toggleNavBar("visible");
  })
  /* toggles visibility by clicking MENU on navbar */
  $("#navbar-menu").click(function(){
    if ($(".navbar-item").css("visibility") == "hidden") {
      toggleNavBar("visible");
    }else if ($(".navbar-item").css("visibility") == "visible") {
      toggleNavBar("hidden");
      navbar.style.backgroundColor = "rgba(250,250,250,0.0)";
    }
  })
})
