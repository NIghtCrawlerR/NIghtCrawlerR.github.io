let game = document.querySelector('.game');
let player = document.querySelector('.player');


//tRex object
const tRex = {
    IMAGE: 'img/trex.png',
    SIZE: 88,
    numberOfFrames: 5,
    currentFrame: 0,
    sourceX: 0,
    sourceY: 0,
    run: function () {
        this.sourceX = this.currentFrame * this.SIZE;
        if (this.currentFrame < this.numberOfFrames) {
            this.currentFrame++;
        }
        else {
            this.currentFrame = 0;
        }
    },
    render: function () {
        player.style.bottom = this.sourceY + 'px';
    },
    fall: function () {
        this.sourceY = 0;
        this.render();
    },
    jump: function () {
        this.sourceY = 100;
        this.render();
        let self = this;
        setTimeout(function () {
            self.fall();
        }, 700)
    }

}

const updateAnimation = () => {
    tRex.run();
    player.style.backgroundPositionX = tRex.sourceX + 'px'
}

(function animationLoop() {
    setTimeout(function () {
        animationLoop();
        updateAnimation();
    }, 50);
}());

const keyPressHandler = (e) => {
    let code = e.keyCode;
    if (code == 87) {
        tRex.jump();
    }
}
window.addEventListener('keydown', keyPressHandler, false);

function Barrier(step, offsetLeft) {
    this.step = step;
    this.offsetLeft = offsetLeft;
}
// Barrier.prototype.render = function () {
//     _barrier.style.left = this.offsetLeft + 'px'
// }
// var interval;
// Barrier.prototype.move = function () {
//     this.offsetLeft = this.offsetLeft - this.step;
//     console.log(this.offsetLeft)

//     this.render();
// }
Barrier.prototype.createBarrier = function () {
    _barrier = document.createElement('div');
    _barrier.className = 'barrier';
    game.appendChild(_barrier);
    
    //this.render();
}






// setInterval(function () {
//     for (let i = 0; i <= 3; i++) {
//         (function (ind) {
//             setTimeout(function () {
//                 let barrier = new Barrier(10, 950)
//                 barrier.createBarrier()

//             }, 1000 + (3000 * ind));
//         })(i);
//     }
// }, 5000)




////////
let interval;

const moveBarrier = (i) => {
    let step = 8;
    let playerCoordRight = player.getBoundingClientRect().right; 
    let playerCoordBottom = player.getBoundingClientRect().bottom; 

    document.querySelectorAll('.barrier').forEach(function(item){
        let offset = item.offsetLeft;
        item.style.left = (offset - step) + 'px'
        let barrierCoordLeft = item.getBoundingClientRect().left;
        let barrierCoordTop = item.getBoundingClientRect().top;

        if(barrierCoordLeft <= playerCoordRight && playerCoordBottom > barrierCoordTop){
            alert('game over')
            clearInterval(interval)
        }

    if (item.offsetLeft < 0) {
        item.remove();
        clearInterval(interval)
    }
    })

}
/////////
var barrier;

const appendBarrier = () => {
    barrier = document.createElement('div');
    barrier.className = 'barrier';
    game.appendChild(barrier);

    interval = setInterval(function(){moveBarrier()}, 70)
}

(function loop() {
    var rand = Math.round(Math.random() * (3000 - 1100)) + 1100;
    setTimeout(function () {
        appendBarrier();
        loop();
    }, rand);
}());




