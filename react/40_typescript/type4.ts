let value: string | number = '안녕하세요';

value = 1000;

// 함수에 모든 값이 들어 올 수 있다 => 제네릭 타입 사용
function getValue(val: string | number | object): string | number | object {
    return val;
}
getValue('hi');

//제네릭 타입으로 변경
function getValue2<T>(value: T) {
    return value;
}
console.log(getValue2<string>('안녕하세요'));
console.log(getValue2<number>(1234));

function arrLength<T>(arr: T[]) {
    return arr.length;
}
console.log(arrLength<string>(['a', 'b', 'c']));
console.log(arrLength<number>([1, 3, 4, 5, 6]));

function printFunc2<T>(x: T, y: T): T {
    console.log(x);
    console.log(y);
    return x;
}
console.log(printFunc2<string>('hi', 'hello'));
