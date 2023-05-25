class Shape{
    //defines shape color/value
    constructor(){ 
        this.color = '';
    }
    setColor(color){
        this.color = (color);
    }
}
// Defines a circle shape and inherits from Shape class
class Circle extends Shape {
    render(){
        return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}">`
    }
}
// Defines a Square shape and inherits from Shape class
class Square extends Shape {
    render(){
        return `<rect width="50" height="50" width="200" fill="${this.color}">`
       
    }

}
// Defines a Triangle shape and inherits from Shape class
class Triangle extends Shape {
    render(){
        return `<polygon points="100,10 40,198 190,78 10,78 160,198" fill="${this.color}">`
    }
};



module.exports = {
    Shape,
    Circle,
    Square,
    Triangle
}