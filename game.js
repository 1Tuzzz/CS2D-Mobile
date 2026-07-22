const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 600;


// персонаж
let player = {
    x: 400,
    y: 300,
    size: 30,
    color: "blue",
    speed: 5
};


// рисуем игрока
function drawPlayer(){
    ctx.fillStyle = player.color;
    ctx.fillRect(
        player.x,
        player.y,
        player.size,
        player.size
    );
}


// обновление игры
function gameLoop(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    drawPlayer();

    requestAnimationFrame(gameLoop);
}

gameLoop();