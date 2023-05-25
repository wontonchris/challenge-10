const {Circle, Square, Triangle} = require('./shapes');

// Circle Shape Test
shape('Circle Shape Test', () => {
test('Render Confirmation', () => {
    const shape = new Circle();
    var color = 'red';
    shape.setColor(color);
    expect(shape.render()).toEqual('<circle cx="25" cy="75" r="20" fill="red"/>');
}
);
});
// Square Shape Test
shape('Square Shape Test', () => {
test('Render Confirmation', () => {
    const shape = new Square();
    var color = 'green';
    shape.setColor(color);
    expect(shape.render()).toEqual('<rect width="50" height="50" width="200" fill="red"/>');
}
);
});
// Triangle Shape Test
shape('Triangle Shape Test', () => {
test('Render Confirmation', () => {
    const shape = new Triangle();
    var color = 'blue';
    shape.setColor(color);
    expect(shape.render()).toEqual('<polygon points="100,10 40,198 190,78 10,78 160,198" fill="red"/>');
}
);
});
