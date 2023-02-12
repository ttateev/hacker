class Creature {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 8;
        this.directions = [];
    }

    chooseCell(character) {
        let found = [];
        this.getNewCoordinates();
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }

    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
}


class Predator {
    move() {
        if (this.energy > 0) {
            this.energy--;
            let emptyCells = this.chooseCell(0);
            let oneEmptyCells = random(emptyCells);
            if (oneEmptyCells) {
                matrix[this.y][this.x] = 0;
                let newX = oneEmptyCells[0];
                let newY = oneEmptyCells[1];
                this.x = newX;
                this.y = newY;
                matrix[this.y][this.x] = 3;
            }
        } else {
            this.die();
        }
    }
    eat() {
        let grasses = this.chooseCell(1);
        let grasseEaters = this.chooseCell(2);
        let all = grasses.concat(grasseEaters);
        let one = random(all);
        if (one) {
            this.energy++;
            matrix[this.y][this.x] = 0;
            let newX = one[0];
            let newY = one[1];
            this.x = newX;
            this.y = newY;
            matrix[this.y][this.x] = 3;

            for (let i in grassArr) {
                if (this.x == grassArr[i].x && this.y == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }
            for (let i in grassEaterArr) {
                if (this.x == grassEaterArr[i].x && this.y == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1);
                    break;
                }
            }
        }
        else {
            this.move();
        }
    }
    die() {
        matrix[this.y][this.x] = 0;
        for (let i in predArr) {
            if (this.x == predArr[i].x && this.y == predArr[i].y) {
                predArr.splice(i, 1);
                break;
            }
        }
    }
    mul() {
        if (this.energy >= 12) {
            var newCell = random(this.chooseCell(0));
            if (newCell) {
                var newPred = new Predator(newCell[0], newCell[1]);
                predArr.push(newPred);
                matrix[newCell[1]][newCell[0]] = 3;
                this.energy = 5
            }
        }
    }
}