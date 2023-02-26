class Parent {
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

    move(mov) {
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
                matrix[this.y][this.x] = mov;
            }
        } else {
            this.die();
        }
    }

    mul(energy, Obj, objArr, newObj) {
        if (this.energy >= energy) {
            var newCell = random(this.chooseCell(0));
            if (newCell) {
                var newObject = new Obj(newCell[0], newCell[1]);
                objArr.push(newObject);
                matrix[newCell[1]][newCell[0]] = newObj;
                this.energy = 5;
            }
        }
        //energy, Obj, objArr, newObj
    }
}