const isTriangle = require("./isTriangle");

function isRightTriangle(a, b, c) {
    return isTriangle(a, b, c) == true && (a*a + b*b == c*c || a*a + c*c == b*b || b*b + c*c == a*a)
}

module.exports = isRightTriangle;