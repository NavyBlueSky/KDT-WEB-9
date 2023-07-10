// // 변수란 특정 값을 저장하는 공간
// // 

// // 키워드 변수이름 = 값
// // 키워드 종류 : var, let, const

// var number = 5; // 변수 선언 및 값 할당

// let string = "가나다";
// string = "라마바";
// // let string2 = "라마바";
// // var 보다 let을 권장한다.

// const string2 = "가가가";

// function aaa() {
//     let string = "가나다";
// }
// //console.log(string)

// // var let const
// // var : 재선언, 재할당 둘다 가능
// // let : 재선언 불가능, 재할당 가능
// // const : 재선언, 재할당 , 둘다 불가능

// let lll;
// console.log(lll)

// const variable = 1;

// var number = 1;
// var string = "aaa";

// let name = 'lily';

// console.log(`hi its ${name}`);

let names = ['길동', '춘향', '짱구'];

console.log(names.length);

names.push('짱아')
console.log("push", names);

names.pop();
console.log(names);
//배열의 마지막 값을 삭제.

names.unshift("신형만");
console.log("unshift", names);
// 배열의 제일 앞에 값을 추가.

names.shift()
console.log("shift", names);
// 배열의 제일 앞의 값을 삭제

let index = names.indexOf("짱구");
console.log(index);
// 인덱스값을 찾아줌, 값이 없다면 -1을 반환

let includes = names.includes("짱아");
console.log(includes);
// 값이 포함되어 있는지 ture or false
