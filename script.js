// board structure
var blocksize = 25;
var rows = 20;
var cols = 20;
var board;
var context;

// snake head
var snakeX = blocksize * 5;
var snakeY = blocksize * 5;

// food
var foodX = blocksize * 10;
var foodY = blocksize * 10;

window.onload = function() {
    board = document.getElementById("board");
    board.height = rows * blocksize;
    board.width = cols * blocksize;
    context = board.getContext("2d");

    update(); 
}

function update() {
    context.fillStyle = "#dde5b6";
    context.fillRect(0, 0, board.width, board.height);

    context.fillStyle = "#386641";
    context.fillRect(snakeX, snakeY, blocksize, blocksize);

    context.fillStyle = "#bc4749";
    context.fillRect(foodX, foodY, blocksize, blocksize);
}