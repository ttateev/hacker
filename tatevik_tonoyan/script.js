var side = 20;
let grassArr = [];
let grassEaterArr = [];
let predArr = [];
let rocketArr = [];
let bombArr = [];
let matrix = [];
function matrixGenerator(size, countGrass, countGrassEater, predatorCount, rocketCount, bombCount) {
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
}

function setup() {
    matrixGenerator(30, 250, 20, 10, 1, 1)
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
                fill("yellow")
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
        predArr[i].mul();
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
    console.log(bombArr)
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

function appear() {
    let x = 0
    let y = Math.floor(random(matrix[0].length-1))
    if (matrix[y][x] != 4) {
        let newRocket = new Rocket(x, y)
        rocketArr.push(newRocket)
        matrix[y][x] = 4            
    }
}

setInterval(() => {
    born()
}, 4000);

setInterval(() => {
    appear();
}, 6000);