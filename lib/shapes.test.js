const {Circle, Square, Triangle} = require('./shapes');

// Circle Shape Test
shape('Circle Shape Test', () => {
test('Render Confirmation', () => {
    const shape = new Circle();
    var color = 'red';
    shape.setColor(color);
    expect(shape.render()).toEqual(`<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}" />`);
}
);
});
// Square Shape Test
shape('Square Shape Test', () => {
test('Render Confirmation', () => {
    const shape = new Square();
    var color = 'green';
    shape.setColor(color);
    expect(shape.render()).toEqual(`<rect x="25%" y="25%" width="50%" height="50%" fill="${this.color}" />`);
}
);
});
// Triangle Shape Test
shape('Triangle Shape Test', () => {
test('Render Confirmation', () => {
    const shape = new Triangle();
    var color = 'blue';
    shape.setColor(color);
    expect(shape.render()).toEqual(`<polygon points="150,30 45,170 255,170" fill="${this.color}" />`);
}
);
});
