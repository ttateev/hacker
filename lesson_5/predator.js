class Predator extends Parent{
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
}