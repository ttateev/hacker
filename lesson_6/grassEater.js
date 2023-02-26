class GrassEater extends Parent {
    // constructor(){
    //     this.gender = this.gender;
    // }

    generateGender() {
        if (matrix[y][x] == 2 && matrix[y][x-1] == 21) {
            
        }
    }
    eat() {
        let grasses = this.chooseCell(1);
        let oneGrass = random(grasses);
        if (oneGrass) {
            this.energy++;
            matrix[this.y][this.x] = 0;
            let newX = oneGrass[0];
            let newY = oneGrass[1];
            this.x = newX;
            this.y = newY;
            matrix[this.y][this.x] = 2;

            for (let i in grassArr) {
                if (this.x == grassArr[i].x && this.y == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }
        }
        else {
            this.move(2);
        }
    }
    die() {
        matrix[this.y][this.x] = 0;
        for (let i in grassEaterArr) {
            if (this.x == grassEaterArr[i].x && this.y == grassEaterArr[i].y) {
                grassEaterArr.splice(i, 1);
                break;
            }
        }
    }
}