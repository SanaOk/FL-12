let a = prompt('Type first value:');
let b = prompt('Type second value:');
let c = prompt('Type third value:');
const two = 2;
const four = 4;

if (isNaN(a) || isNaN(b) || isNaN(c) ||
    a === '' || b === '' || c === '' ||
    a === '0'
) {
    console.log('Invalid input data')
} else {
    a = parseFloat(a);
    b = parseFloat(b);
    c = parseFloat(c);
    const d = Math.pow(b, two) - four * a * c;

    if (d === 0) {
        const x = Math.round(-b / two * a);
        console.log(`x = ${x}`);
    } else if (d > 0) {
        const x1 = Math.round((-b - Math.sqrt(d)) / (two * a));
        const x2 = Math.round((-b + Math.sqrt(d)) / (two * a));
        console.log(`x1 = ${x1} and x2 = ${x2}`);
    } else if (d < 0) {
        console.log('No solution');
    }

}

