// prac3
const sum1 = (a: number, b: number): number => a + b;

console.log(sum1(3, 4));

// prac4
function sum2(...numbers: number[]) {
    const result = numbers.reduce((a, b) => a + b, 0);
    return result;
}

console.log(sum2(1, 2, 4, 6));
