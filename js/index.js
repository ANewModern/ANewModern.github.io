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
  x[moveIndex - 1].style.display = "block";
}

$(document).ready(function() {
  $("a[href='#top']").click(function() {
    $("html, body").animate({
      scrollTop: 0
    }, "slow");
    return false;
  });
  var scroll_pos = 0;
  $(document).scroll(function() {
    $(".line").addClass("color");
    $(".top-line").removeClass("right");
    $(".left-line").removeClass("up");
    $(".right-line").removeClass("bot");
    $(".bot-line").removeClass("left");
    $(".name-container").addClass("not-mid");
    $(".immy").css("visibility", "hidden");
    scroll_pos = $(this).scrollTop();
    if (scroll_pos <= 100) {
      $(".line").removeClass("color");
      $(".top-line").addClass("right");
      $(".left-line").addClass("up");
      $(".right-line").addClass("bot");
      $(".bot-line").addClass("left");
      $(".name-container").removeClass("not-mid");
      $(".immy").css("visibility", "visible");
    }
  });
});
