let a = prompt('Type first length:');
let b = prompt('Type second length:');
let c = prompt('Type third length:');

if (isNaN(a) || isNaN(b) || isNaN(c) ||
    a === '' || b === '' || c === '' ||
    a.includes(' ') || b.includes(' ') || c.includes(' ')
) {
    alert('Input values should be ONLY numbers')
} else {
    a = parseFloat(a);
    b = parseFloat(b);
    c = parseFloat(c);

    if (a <= 0 || b <= 0 || c <= 0) {
        alert('A triangle must have 3 sides with a positive definite length')
    } else if (a <= b + c && b <= a + c && c <= b + c) {
        if (a === b && a === c) {
            console.log('Equilateral triangle')
        } else if (a === b || a === c || b === c) {
            console.log('Isosceles triangle')
        } else {
            console.log('Scalene triangle')
        }
    } else {
        alert('Triangle doesn’t exist')
    }
}