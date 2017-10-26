// Enjoy
function randomInt (min,max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var board = document.getElementById('board');
var ctx = board.getContext('2d');
ctx.fillStyle = '#00ff00';

var ball = {
  speed: {
    x: randomInt(10, 20),
    y: randomInt(10, 20)
  }, position: {
    x: 250,
    y: 125
  }
};

var game = {
  top: 0,
  bottom: $(window).height(),
  left: 0,
  right: $(window).width()
};

$(document).ready(function () {
  ctx.beginPath();
  ctx.arc(ball.position.x, ball.position.y, 25, 0, 2 * Math.PI);
  ctx.fill();
  
  setInterval(function () {
    // Clear the screen
    ctx.clearRect(0, 0, 500, 250);
    // Draw the new ball
    ctx.beginPath();
    ctx.arc(ball.position.x, ball.position.y, 25, 0, 2 * Math.PI);
    ctx.fill();
    // If the circle is at or past a wall, change direction
    if (ball.position.x + 25 >= 500) {
      ball.speed.x = randomInt(-20, -10);
    } else if (ball.position.x - 25 <= 0) {
      ball.speed.x = randomInt(10, 20);
    }
    
    if (ball.position.y + 25 >= 250) {
      ball.speed.y = randomInt(-20, -10);
    } else if (ball.position.y - 25 + <= 0) {
      ball.speed.y = randomInt(10, 20);
    }
    
    // Move the circle
    ball.position.x += ball.speed.x;
    ball.position.y += ball.speed.y;
  }, 50);
});
