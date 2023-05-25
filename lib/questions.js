//questions for logo generator
const questions = [ 
    {
        type: 'input',
        name: 'text',
        message: "Text: enter (3) Characters: ",

    },
    {
        type: 'input',
        name: 'text-color',
        message: "Text Color: Color Keyword (Or Hex Value): ",
    },
    {
        type: 'input',
        name: 'shape',
        message: "Shape: (circle, square, triangle): ",
    },
];

module.exports = questions;