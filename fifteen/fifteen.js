var pieces = [];

$(document).ready(function () {
  var i;
  for (i = 0; i < 16; i++) {
    if (i < 15) {
      document.getElementsByClassName('piece')[i].innerHTML = parseInt(document.getElementsByClassName('piece')[i].id, 10) + 1;
      pieces.push(true);
    } else {
      pieces.push(false);
    }
  }
});

$('.piece').click(function () {
  var target = parseInt($(this).attr('id'), 10);
  var clicked = $(this);
  if (!pieces[target + 1] && target + 1 % 4 !== 0 && target < 15) {
    pieces[target] = false;
    pieces[target + 1] = true;
    document.getElementsByClassName('piece')[target].innerHTML = '';
    document.getElementsByClassName('piece')[target + 1].innerHTML = target + 1;
  }
});
