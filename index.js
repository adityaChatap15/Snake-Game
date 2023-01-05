let direction  = {x: 0, y: 0};
const foodSound = new Audio('food.mp3')
const gameOverSound = new Audio('gameover.mp3')
const moveSound = new Audio('move.mp3')
const musicSound = new Audio('music.mp3')
let speed = 2;
let lastPaintTime = 0;
let snakeArr = [
    {x: 13, y:15}
]

food = {x:13, y:15};

function main(ctime) {
    window.requestAnimationFrame(main);
    if((ctime - lastPaintTime)/1000 < 1/speed){
        console.log(ctime)
    }
    lastPaintTime = ctime;
    gameEngine();
}

function gameEngine(){
    board.innerHtml = "";
    snakeArr.forEach((e, index)=>{
        snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridRowStart = e.x;
        snakeElement.classList.add('snake')
        if(index === 0){
            snakeElement.classList.add('head')
        }
        board.appendChild(snakeElement);
    })

    foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridRowStart = food.x;
    foodElement.classList.add('food')
    board.appendChild(snakeElement);
}

window.requestAnimationFrame(main);