const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


// Игрок
let player = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    size: 40,
    color: "blue"
};


// Рисуем игрока
function drawPlayer(){

    ctx.fillStyle = player.color;

    ctx.fillRect(
        player.x,
        player.y,
        player.size,
        player.size
    );

}


// Игровой цикл
function gameLoop(){

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );


    drawPlayer();


    requestAnimationFrame(gameLoop);
}


gameLoop();