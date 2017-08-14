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
