var COLS = 26, ROWS = 26;
var EMPTY = 0, SNAKE = 1, FRUIT = 2;

var grid = {
  width: null,
  height: null,
  _grid: null,
  
  init: function (d, c, r) {
    this.width = c;
    this.height = r;
    
    this._grid = [];
    for (var x = 0; x < c; x++) {
      this._grid.push([]);
      for (var y = 0; y < r; y++) {
        this._grid[x].push([d]);
      }
    }
  },
  
  set: function (val, x, y) {
    this._grid[x][y] = val;
  },
  
  get: function (x, y) {
    return this._grid[x][y];
  }
};

var snake = {
  direction: null,
  _queue: null,
  
  init: function (d, x, y) {
    
  },
  
  insert: function (x, y) {
    
  },
  
  remove: function () {
    
  }
};

function setFood () {
  
}

function main () {}

function init () {}

function loop () {}

function update () {}

function draw () {}

main();
