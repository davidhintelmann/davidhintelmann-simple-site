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

/* changes jumbotron effects when mouse hovers over */
$(document).ready(function(){
  $(".jumbo-bg-text").hover(function(){
      $(this).css("backgroundColor","rgba(250, 250, 250, 0.7)");
      $(this).css("padding","25px");
      $(this).css("transition","0.2s");
      $(this).css("boxShadow","4px 4px 8px black");
    }, function(){
      $(this).css("backgroundColor","rgba(250, 250, 250, 0.3)");
      $(this).css("padding","20px");
      $(this).css("boxShadow","1px 1px 2px black");
  });
});

/* changes .main-info effects when mouse hovers over */
$(document).ready(function(){
  $(".main-info").hover(function(){
      $(this).css("backgroundColor","rgba(0, 0, 0, 0.7)");
      $(this).css("boxShadow","2px 2px 4px black");
      $(this).css("transition","0.2s");
      $(this).css("color","orange");
    }, function(){
      $(this).css("backgroundColor","#343A40");
      $(this).css("boxShadow","1px 1px 2px black");
      $(this).css("color","#D89D6D");
  });
});

/* changes imgs on homepage to increase in size when mouse hovers over */
$(document).ready(function(){
  $(".img-responsive").hover(function(){
      $(this).css("transform","scale(1.1)");
      $(this).css("transition","0.2s");
      $(this).css("boxShadow","2px 2px 4px black");
    }, function(){
      $(this).css("transform","scale(1)");
      $(this).css("backgroundColor","#343A40");
      $(this).css("boxShadow","1px 1px 2px black");
  });
});

/* changes .col-second on homepage to increase in size when mouse hovers over */
$(document).ready(function(){
  $(".col-second").hover(function(){
      $(this).css("transform","scale(1.1)");
      $(this).css("backgroundColor","#FFFFFF");
      $(this).css("transition","0.2s");
      $(this).css("boxShadow","2px 2px 4px black");
    }, function(){
      $(this).css("transform","scale(1)");
      $(this).css("backgroundColor","#FFFFFF");
      $(this).css("boxShadow","1px 1px 2px black");
  });
});

/* changes images on expeditions pages to increase in size when mouse hovers over */
$(document).ready(function(){
  $(".card-img-top").hover(function(){
      $(this).css("transform","scale(1.1)");
      $(this).css("backgroundColor","#FFFFFF");
      $(this).css("transition","0.2s");
      $(this).css("boxShadow","2px 2px 4px black");
    }, function(){
      $(this).css("transform","scale(1)");
      $(this).css("backgroundColor","#FFFFFF");
      $(this).css("boxShadow","1px 1px 2px black");
  });
});
