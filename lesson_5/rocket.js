class Rocket {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    move() {
        if (this.y <= matrix[0].length) {
            matrix[this.y][this.x] = 0;
            this.x++
            matrix[this.y][this.x] = 4;
        } else {
            this.die();
        }

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
        for (let i in predArr) {
            if (this.x == predArr[i].x && this.y == predArr[i].y) {
                predArr.splice(i, 1);
                break;
            }
        }
    }

    die() {
        matrix[this.y][this.x] = 0;
        for (let i in rocketArr) {
            if (this.x == rocketArr[i].x && this.y == rocketArr[i].y) {
                rocketArr.splice(i, 1);
                break;
            }
        }
    }

    appear() {

    }
}