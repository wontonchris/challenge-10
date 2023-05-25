class Shape {
    constructor() {
      this.color = '';
    }
  
    setColor(color) {
      this.color = color;
    }
  }
  
  class Circle extends Shape {
    render() {
      return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}" />`;
    }
  }
  
  class Square extends Shape {
    render() {
      return `<rect x="25%" y="25%" width="50%" height="50%" fill="${this.color}" />`;
    }
  }
  
  class Triangle extends Shape {
    render() {
      return `<polygon points="150,30 45,170 255,170" fill="${this.color}" />`;
    }
  }
  
  module.exports = {
    Shape,
    Circle,
    Square,
    Triangle,
  };
  