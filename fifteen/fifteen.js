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
  pieces.push(true);
});

$('.piece').click(function () {
  var target = parseInt($(this).attr('id'), 10);
  var string = $(this).text();
  var clicked = $(this);
  if (!pieces[target + 1] && target + 1 % 4 !== 0) {
    pieces[target] = false;
    pieces[target + 1] = true;
    document.getElementsByClassName('piece')[target].innerHTML = '';
    document.getElementsByClassName('piece')[target + 1].innerHTML = string;
  } else if (!pieces[target - 1] && target + 4 % 4 !== 0) {
    pieces[target] = false;
    pieces[target - 1] = true;
    document.getElementsByClassName('piece')[target].innerHTML = '';
    document.getElementsByClassName('piece')[target - 1].innerHTML = string;
  } else if (!pieces[target + 4] && target < 12) {
    pieces[target] = false;
    pieces[target + 4] = true;
    document.getElementsByClassName('piece')[target].innerHTML = '';
    document.getElementsByClassName('piece')[target + 4].innerHTML = string;
  } else if (!pieces[target - 4] && target > 3) {
    pieces[target] = false;
    pieces[target - 4] = true;
    document.getElementsByClassName('piece')[target].innerHTML = '';
    document.getElementsByClassName('piece')[target - 4].innerHTML = string;    
  }
});

$('#scramble').click(function () {
  
});
