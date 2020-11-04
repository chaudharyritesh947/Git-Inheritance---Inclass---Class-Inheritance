// declare class

// export class using module.exports
 class shape{
    constructor(color){
        this.color =color;
    }

    drawShape(){
        console.log("Drawing a shape");
    }

    calculateArea(){
        console.log("Calculating the damm area!");
    }
}

module.exports = shape;