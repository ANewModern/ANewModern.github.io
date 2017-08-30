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

$(document).ready(function() {
  var scroll_pos = 0;
  $(document).scroll(function() {
    $(".immy").css("display", "none");
    $(".line").addClass("color");
    $(".name-container").addClass("not-mid");
    $(".top-line").removeClass("right");
    $(".left-line").removeClass("up");
    $(".right-line").removeClass("bot");
    $(".bot-line").removeClass("left");

    scroll_pos = $(this).scrollTop();
    if (scroll_pos === 0) {
      $(".immy").css("display", "inline");
      $(".line").removeClass("color");
      $(".name-container").removeClass("not-mid");
      $(".top-line").addClass("right");
      $(".left-line").addClass("up");
      $(".right-line").addClass("bot");
      $(".bot-line").addClass("left");
    }
  });
});
