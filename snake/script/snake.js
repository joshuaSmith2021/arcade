var canvas = document.getElementById('game-board');
var ctx = canvas.getContext('2d');
var snakeSize = 10;
var w = canvas.style.width;
var h = canvas.style.height;
var score = 0;
var snake;
var food;

// Module Pattern
var drawModule = (function () {
  var bodySnake = function (x, y) {
    // Single Square
    ctx.fillStyle = '#00ff00';
    ctx.fillRect(x * snakeSize, y * snakeSize, snakeSize, snakeSize);
  };
  
  var pizza = function (x, y) {
    ctx.fillStyle = '#ff0000';
    ctx.fillRect(x * snakeSize + 1, y * snakeSize + 1, snakeSize - 2, snakeSize - 2);
  };
  
  var scoreText = function () {
    // Display the score
    var scoreText = "Score: " + score;
    ctx.fillStyle = '#0000ff';
    ctx.fillText(scoreText, 145, h - 5);
  };
});

var drawSnake = function () {
  var length = 4;
  snake = [];
  
  for (var i = length; i >= 0; i--) {
    snake.push({x:i, y:0});
  }
};

var createFood = function () {
  food = {
    x: Math.floor((Math.random() * 30) + 1),
    y: Math.floor((Math.random() * 30) + 1)
  };
  
  for (var i = 0; i > snake.length; i++) {
    
  }
};
