// Import modules
const inquirer = require('inquirer');
const { Circle, Square, Triangle } = require('./lib/shapes');
const fs = require('fs');
const questions = require('./lib/questions');

// Define SVG class
class Svg {
    constructor() {
      this.textElement = '';
      this.shapeElement = '';
    }
  
    render() {
      return `<svg version="1.0" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`;
    }
  
    setTextElement(text, color) {
      this.textElement = `<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="60" fill="${color}">${text}</text>`;
    }
  
    setShapeElement(shape, color) {
      this.shapeElement = `<${shape} cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${color}"></${shape}>`;
    }
  }
  


  

// write data function
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
}

// init function
async function init() {
  console.log('SVG Logo Generator!');
  const svgFile = 'logo.svg';

  // answers from questions
  const answers = await inquirer.prompt(questions);

  // user input validation
  if (answers.text.length > 0 && answers.text.length <= 3) {
    console.log('Text:', answers.text);
  } else {
    console.log('Invalid number of characters');
    return;
  }

  // user answers
  const user_text = answers.text;
  const user_font_color = answers.textColor;
  const user_shape_color = answers.shapeColor;
  const user_shape = answers.shape;

  // SVG Logo Generator
  const svg = new Svg();
  svg.setTextElement(user_text, user_font_color);
  svg.setShapeElement(user_shape, user_shape_color);
  const svgString = svg.render();

  // write to file
  writeToFile(svgFile, svgString);
}

// call init function
init();
