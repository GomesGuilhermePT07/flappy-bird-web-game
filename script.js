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