const isTriangle = require('./isTriangle');

test('3, 4, 5 is triangle', () => {
    expect(isTriangle(3, 4, 5)).toBe(true);
});

test('3, 4, 8 is triangle', () => {
    expect(isTriangle(3, 4, 8)).toBe(false);
});

test ('0, 1, 2 is not triangle', () => {
    expect(isTriangle(1, 1, 2)).toBe(false);

});

test ('3, 6, 3 is not triangle', () => {
    expect(isTriangle(3, 6, 3)).toBe(false);

});

test ('A, 1, 2 is not triangle', () => {
    expect(isTriangle('A', 1, 2)).toBe(false);

});

test ('6.2, 6, 2 is triangle', () => {
    expect(isTriangle(6.2, 6, 2)).toBe(true);

});