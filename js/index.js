$(document).ready(function() {
  var scroll_pos = 0;
  console.log(screen.width);
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || screen.width < 1360) {
    $(".logo").hide();
    $(".icons").hide();
    $(".mobile").show();
  } else {
    $(document).scroll(function() {
      $(".text").html("_J");
      $("#boxer").addClass("left");
      $("#icon-animation").addClass("right");
      $(".1").addClass("height");
      scroll_pos = $(this).scrollTop();
      if (scroll_pos === 0) {
        $(".text").html("_Jaime " + "<span class='my-career'>front-end developer</span>");
        $("#boxer").removeClass("left");
        $("#icon-animation").removeClass("right");
        $(".1").removeClass("height");
      }
    });
  }
});

var moveIndex = 1;
pic(moveIndex);

function move(n) {
    pic(moveIndex += n);
}

function pic(n) {
    var i;
    var x = document.getElementsByClassName("slide");
    if (n > x.length) {
      moveIndex = 1;
    }
    if (n < 1) {
      moveIndex = x.length;
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[moveIndex-1].style.display = "block";
}
