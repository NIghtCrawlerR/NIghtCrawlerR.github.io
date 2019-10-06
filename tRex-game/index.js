let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

const trex = {
    img: 'img/trex.png',
    width: 88,
    height: 90,

    sourceX: 0,
    sourceY: 0,

    numOfFrames: 5,
    currentFrame: 0,

    jumpHeight: 90,
    jumpSpeed: 20,
    bottomDistance: canvas.height - 90,

    isJump: false,
    up: false,

    jump: function () {
        if (this.up) {
            this.bottomDistance -= this.jumpSpeed;
            if (this.bottomDistance == this.jumpHeight) {
                this.up = false;
            }
        }
        else {
            this.bottomDistance += this.jumpSpeed;
            if (this.bottomDistance == canvas.height - 90) {
                this.isJump = false;
            }
        }
    },

    updateAnimation: function () {
        this.sourceX = this.currentFrame * this.width;

        if (this.currentFrame < this.numOfFrames) {
            this.currentFrame++;
        }
        else {
            this.currentFrame = 0;
        }
    }
}

function Barrier() {
    this.img = 'img/barrier.png',
        this.width = 47,
        this.height = 96,
        this.speed = 20,

        this.numOfFrames = 5,
        this.currentFrame = 0,

        this.coordX = canvas.width - this.width,

        this.sourceX = this.currentFrame * this.width,

        this.move = function () {
            this.coordX -= this.speed;
        }
}


function drawTrex() {
    ctx.drawImage(trexImg,
        trex.sourceX, trex.sourceY, trex.width, trex.height,
        0, trex.bottomDistance, trex.width, trex.height);
}

var barrier = new Barrier();
var barrier2;
setTimeout(() => {
    barrier2 = new Barrier();
}, 1000);
let barriers = [];

// function createBarriers(n){
//     for(let i = 0; i < n; i++){
//         barriers[i] = new Barrier();
//     }
//     return barriers;
// }
// console.log(createBarriers(10))

function drawBarrier() {
    ctx.drawImage(barrierImg,
        0, 0, barrier.width, barrier.height,
        barrier.coordX, canvas.height - barrier.height, barrier.width, barrier.height)
    if(barrier2){
        ctx.drawImage(barrierImg,
            0, 0, barrier2.width, barrier2.height,
            barrier2.coordX, canvas.height - barrier2.height, barrier2.width, barrier2.height)
    }
}



const render = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawTrex();

    drawBarrier();
}



loadHandler = () => {
    render();
    drawBarrier();
}

let trexImg = new Image();
let barrierImg = new Image();
trexImg.addEventListener('load', loadHandler, false);
barrierImg.addEventListener('load', loadHandler, false);
trexImg.src = trex.img;
barrierImg.src = barrier.img;



updateAnimation = () => {
    setTimeout(() => {
        updateAnimation();
    }, 70);
    trex.updateAnimation();
    if (trex.isJump) {

        trex.jump();
    }
    barrier.move();
    if(barrier2){
        barrier2.move();
        if (barrier2.coordX < 0) {
            barrier2  .coordX = canvas.width;
        }
    }
    if (barrier.coordX < 0) {
        barrier.coordX = canvas.width;
    }
    //console.log(barrier.coordX)
    render();
}


updateAnimation();




//events
keyDownHandler = (e) => {
    if (e.keyCode == 32) {
        trex.up = true;
        trex.isJump = true;

    }
}
document.addEventListener("keydown", keyDownHandler);