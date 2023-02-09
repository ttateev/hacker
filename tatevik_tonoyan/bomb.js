class Bomb {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 5;
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

    die() {
        matrix[this.y][this.x] = 0;
        for (let i in bombArr) {
            if (this.x == bombArr[i].x && this.y == bombArr[i].y) {
                bombArr.splice(i, 1);
                break;
            }
        }
    }

    explode() {
        this.energy--
        if (this.energy <= 0) {
            this.die();

        }
        for (let i in this.directions) {
            let x = this.directions[i][0];
            let y = this.directions[i][1];
            matrix[y][x] = 0;

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
    }

    born() {

    }
}