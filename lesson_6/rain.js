class Rain {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    move() {
        if (this.y < matrix.length) {
            for(let i in matrix[this.y]){
                //matrix[this.y][i] = 0
                this.y++ 
                console.log(this.y)
                matrix[this.y][i] = 6;
            }
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
        for (let i in bombArr) {
            if (this.x == bombArr[i].x && this.y == bombArr[i].y) {
                bombArr.splice(i, 1);
                break;
            }
        }
        for (let i in rocketArr) {
            if (this.x == rocketArr[i].x && this.y == rocketArr[i].y) {
                brocketArr.splice(i, 1);
                break;
            }
        }
    }

    die() {
        matrix[this.y][this.x] = 0;
        for (let i in rainArr) {
            if (this.x == rainArr[i].x && this.y == rainArr[i].y) {
                rainArr.splice(i, 1);
                break;
            }
        }
    }

    rainAppear() {

    }
}