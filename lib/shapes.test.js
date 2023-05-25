const {Circle, Square, Triangle} = require('./shapes');

// Circle Shape Test
test('Circle Shape Test', () => {
    const shape = new Circle();
    shape.setColor(color);
    expect(shape.render()).toEqual('<circle cx="25" cy="75" r="20" fill="red"/>');
}
);
// Square Shape Test
test('Square Shape Test', () => {
    const shape = new Square();
    shape.setColor(color);
    expect(shape.render()).toEqual('<rect width="50" height="50" width="200" fill="red"/>');
}
);
// Triangle Shape Test
test('Triangle Shape Test', () => {
    const shape = new Triangle();
    shape.setColor(color);
    expect(shape.render()).toEqual('<polygon points="100,10 40,198 190,78 10,78 160,198" fill="red"/>');
}
);
