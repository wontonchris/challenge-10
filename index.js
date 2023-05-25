// Import modules
const inquire = require('inquirer');
const {Circle, Square, Triangle} = require('./lib/shapes');
const fs = require('fs');
const questions = require('./lib/questions');

// Define SVG class
class Svg{
    constructor(){
        this.textElement = ''
        this.shapeElement = ''
    }
    render(){

        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`
    }
    setTextElement(text,color){
        this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
    }
    setShapeElement(shape){
        this.shapeElement = shape.render()

    }
    
}


// write data function
function writeToFile(fileName, data) {
    console.log(data)
    console.log(fileName)
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
        });
    }

