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
