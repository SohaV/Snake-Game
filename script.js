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
var foodX;
var foodY;

// snake speed
var velocityX = 0;
var velocityY = 0;

window.onload = function() {
    board = document.getElementById("board");
    board.height = rows * blocksize;
    board.width = cols * blocksize;
    context = board.getContext("2d");

    placeFood();
    document.addEventListener("keyup", changeDirection);
    setInterval(update, 1000/10);
}

function update() {
    context.fillStyle = "#dde5b6";
    context.fillRect(0, 0, board.width, board.height);

    context.fillStyle = "#386641";
    snakeX += velocityX * blocksize;
    snakeY += velocityY * blocksize;
    context.fillRect(snakeX, snakeY, blocksize, blocksize);

    context.fillStyle = "#bc4749";
    context.fillRect(foodX, foodY, blocksize, blocksize);
}

function changeDirection(e) {
    if (e.code == "ArrowUp") {
        velocityX = 0;
        velocityY = -1;
    } else if (e.code == "ArrowDown") {
        velocityX = 0;
        velocityY = 1;
    } else if (e.code == "ArrowLeft") {
        velocityX = -1;
        velocityY = 0;
    } else if (e.code == "ArrowRight") {
        velocityX = 1;
        velocityY = 0;
    }

}

function placeFood() {
    foodX = Math.floor(Math.random() * cols) * blocksize;
    foodY = Math.floor(Math.random() * rows) * blocksize;
}