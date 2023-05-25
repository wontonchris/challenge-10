// Import modules
const inquire = require('inquirer');
const {Circle, Square, Triangle} = require('./lib/shapes');
const fs = require('fs');
const questions = require('./lib/questions');

// Define SVG class
class SVG{
    constructor(){
        this.textElements = [];
        this.shapeElements = [];
}

// Render SVG
render(){
    return `
