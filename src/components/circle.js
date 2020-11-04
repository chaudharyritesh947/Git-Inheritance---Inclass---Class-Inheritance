// import using require

// declare class


import shape from './shape';
class circle extends shape{
    constructor(){
        super();
    }

    calculateArea(){
        console.log("Area of circle with color: ",this.color);
        return 3.14 * 1 * 1;
    }
}
// export class using module.exports
