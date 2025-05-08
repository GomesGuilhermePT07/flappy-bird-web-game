const bird = document.getElementById("bird");
const pipeTop = document.getElementById("pipe-top");
const pipeBottom = document.getElementById("pipe-bottom");
const scoreDisplay = document.getElementById("score");
const game = document.getElementById("game");

let birdTop = 200;
let velocity = 0;
let gravity = 0.6;
let jumping = -10;
let pipeLeft = 400;
let pipeGap = 150;
let pipeHeight = randomPipeHeight();
let score = 0;

function randomPipeHeight() {
    return Math.floor(Math.random() * 250) + 50;
}

function update() {
    velocity += gravity;
    birdTop += velocity;
    bird.style.top = birdTop + "px";

    pipeLeft -= 2;

    if (pipeLeft < -60) {
        pipeLeft = 400;
        pipeHeight = randomPipeHeight();
        score++;
        scoreDisplay.textContent = score;
    }

    pipeTop.style.left = pipeLeft + "px";
    pipeTop.style.height = pipeHeight + "px";

    pipeBottom.style.left = pipeLeft + "px";
    pipeBottom.style.height = (600 - pipeHeight - pipeGap) + "px";

    // Colisão
    if (
        birdTop < 0 ||
        birdTop + 30 > 600 ||
        (pipeLeft < 80 && pipeLeft + 60 > 50 &&
            (birdTop < pipeHeight || birdTop + 30 > pipeHeight + pipeGap))
    ) {
        resetGame();
    }

    requestAnimationFrame(update);
}

function resetGame() {
    alert("Game Over! Pontuação: " + score);
    birdTop = 200;
    velocity = 0;
    pipeLeft = 400;
    score = 0;
    scoreDisplay.textContent = "0";
}

document.addEventListener("keydown", function () {
    velocity = jumping;
});

update();