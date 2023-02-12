




class Creature{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    move(){
        console.log("Move")
    }
    die(){
        console.log("Die")
    }
}

class GrassEater extends Creature{
    mul(){
        console.log("Multiply")
    }
    chooseCell(){
        console.log("Random Cell")
    }
    eat(){
        console.log("Eat");
    }
}

class Predator extends Creature{
    constructor(x, y, energy){
        super(x, y);
        this.energy = energy
    }
}