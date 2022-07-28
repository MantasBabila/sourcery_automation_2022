const isRightTriangle = require('./isRightTriangle');

test('3, 4, 5 is triangle', () => {
    expect(isRightTriangle(3, 4, 5)).toBe(true);
});

test('0, 4, 5 is triangle', () => {
    expect(isRightTriangle(0, 4, 5)).toBe(false);
});

test ('-4, 5, 6 is not triangle', () => {
    expect(isRightTriangle(1, 1, 2)).toBe(false);

});

test ('1000005, 4, 5 is not triangle', () => {
    expect(isRightTriangle(3, 6, 3)).toBe(false);

});

test ('A, 4, 5 is not triangle', () => {
    expect(isRightTriangle('A', 1, 2)).toBe(false);

});

test ('6.2, 4, 5 is not triangle', () => {
    expect(isRightTriangle(6.2, 6, 2)).toBe(false);

});