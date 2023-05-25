// questions for logo generator
const questions = [ 
    {
        type: 'input',
        name: 'text',
        message: "Text: enter (3) Characters: ",
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: "Shape Color: Color Keyword (Or Hex Value): ",
    },
    {
        type: 'input',
        name: 'textColor',
        message: "Text Color: Color Keyword (Or Hex Value): ",
    },
    {
        type: 'list',
        name: 'shape',
        choices: ['Circle', 'Square', 'Triangle'],
    },
];

module.exports = questions;
