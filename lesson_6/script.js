var side = 20;
let grassArr = [];
let grassEaterArr = [];
let predArr = [];
let rocketArr = [];
let bombArr = [];
let rainArr = []
let matrix = [];
function matrixGenerator(size, countGrass, countGrassEater, predatorCount, rocketCount, bombCount, rainCount) {
    for (let i = 0; i < size; i++) {
        matrix.push([])
        for (let j = 0; j < size; j++) {
            matrix[i].push(0)
        }
    }
    for (let k = 0; k < countGrass; k++) {
        let x = Math.floor(random(size))
        let y = Math.floor(random(size))
        if (matrix[y][x] == 0) {
            matrix[y][x] = 1
        }
        else {
            k--
        }
    }
    for (let k = 0; k < countGrassEater; k++) {
        let x = Math.floor(random(size))
        let y = Math.floor(random(size))
        if (matrix[y][x] == 0) {
            matrix[y][x] = 2
        }
        else {
            k--
        }
    }
    for (let k = 0; k < predatorCount; k++) {
        let x = Math.floor(random(size))
        let y = Math.floor(random(size))
        if (matrix[y][x] == 0) {
            matrix[y][x] = 3
        }
        else {
            k--
        }
    }
    for (let k = 0; k < rocketCount; k++) {
        let x = 0
        let y = Math.floor(random(size))
        matrix[y][x] = 4
    }
    for (let k = 0; k < bombCount; k++) {
        let x = Math.floor(random(1, size - 1))
        let y = Math.floor(random(1, size - 1))
        matrix[y][x] = 5
    }
    for (let k = 0; k < rainCount; k++) {
        let y = 0
        let x = Math.floor(random(1, size - 1))
        matrix[y][x] = 6
    }
}

function setup() {
    matrixGenerator(30, 250, 20, 10, 1, 1, 0)
    createCanvas(matrix[0].length * side, matrix.length * side)
    background('#acacac');
    frameRate(5);

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y);
                grassArr.push(gr);
            } else if (matrix[y][x] == 2) {
                var grEater = new GrassEater(x, y);
                grassEaterArr.push(grEater);
            } else if (matrix[y][x] == 3) {
                var pred = new Predator(x, y);
                predArr.push(pred);
            } else if (matrix[y][x] == 4) {
                var roc = new Rocket(x, y);
                rocketArr.push(roc);
            } else if (matrix[y][x] == 5) {
                var bmb = new Bomb(x, y);
                bombArr.push(bmb);
            } else if (matrix[y][x] == 6) {
                var rn = new Rain(x, y);
                rainArr.push(rn);
            }
        }
    }

}

function draw() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if (matrix[y][x] == 2) {
                fill("#ffd966")
            }
            else if (matrix[y][x] == 21) {
                fill("#cccc00")
            }
            else if (matrix[y][x] == 3) {
                fill("darkred")
            }
            else if (matrix[y][x] == 4) {
                fill("darkblue")
            }
            else if (matrix[y][x] == 5) {
                fill("black")
            }
            else if (matrix[y][x] == 6) {
                fill("#3366ff")
            }

            rect(x * side, y * side, side, side);
        }
    }

    for (var i in grassArr) {
        grassArr[i].mul()
    }
    for (var i in grassEaterArr) {
        grassEaterArr[i].eat()
    }
    for (var i in predArr) {
        predArr[i].mul(12, Predator, predArr, 3);
    }
    for (var i in predArr) {
        predArr[i].eat();
    }
    for (var i in rocketArr) {
        rocketArr[i].move();
    }
    for (var i in bombArr) {
        bombArr[i].explode();
    }
    for (var i in rainArr) {
        rainArr[i].move();
    }
    
}

function born() {
    let x = Math.floor(random(1, matrix[0].length - 1))
    let y = Math.floor(random(1, matrix.length - 1))

    matrix[y][x] = 5;
    let newBomb = new Bomb(x, y)
    bombArr.push(newBomb)

    for (let i in grassArr) {
        if (x == grassArr[i].x && y == grassArr[i].y) {
            grassArr.splice(i, 1);
            break;
        }
    }
    for (let i in grassEaterArr) {
        if (x == grassEaterArr[i].x && y == grassEaterArr[i].y) {
            grassEaterArr.splice(i, 1);
            break;
        }
    }
    for (let i in predArr) {
        if (x == predArr[i].x && y == predArr[i].y) {
            predArr.splice(i, 1);
            break;
        }
    }
    for (let i in rocketArr) {
        if (x == rocketArr[i].x && y == rocketArr[i].y) {
            rocketArr.splice(i, 1);
            break;
        }
    }
}

function rocketAppear() {
    let x = 0
    let y = Math.floor(random(matrix[0].length-1))
    if (matrix[y][x] != 4) {
        let newRocket = new Rocket(x, y)
        rocketArr.push(newRocket)
        matrix[y][x] = 4            
    }
}

function rainAppear() {
    let y = 0
    for(let i in matrix[y]){
        matrix[y][i] = 6
        let newRain = new Rain(i, y)
        rainArr.push(newRain) 
    }
    
}

setInterval(() => {
    born()
}, 4000);

setInterval(() => {
    rocketAppear();
}, 6000);

setInterval(() => {
    rainAppear();
}, 2000);