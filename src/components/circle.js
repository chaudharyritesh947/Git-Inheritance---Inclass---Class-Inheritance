// import using require

// declare class

const shape = require('./shape');
class circle extends shape.shape{
    constructor(){
        super();
    }

    calculateArea(){
        console.log("Area of circle with color: ",this.color);
        return 3.14 * 1 * 1;
    }
}
// export class using module.exports
