// 자바스크립트에는 정수와 실수의 자료형이 따로 있지 않음
let integer = 100;
let real = 1.234;
let negative = -5.67;

console.log(
  typeof integer,
  typeof real,
  typeof negative
);

let x = 1 / 0;
console.log(x, typeof x);

// 무한대에는 양음이 있음
console.log(-x, typeof -x);

let y = -1 / 0;
console.log(y, typeof y);

let z = Infinity;
console.log(z, typeof z);


x = 1 / 'abc';
y = 2 * '가나다';
z = NaN;

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);

// NaN은 양음이 없음
console.log(-NaN);

console.log(
  typeof '1', isNaN('1'), Number.isNaN('1')
); // 특정 숫자로 변환 가능한 문자

console.log(
  typeof true, isNaN(true), Number.isNaN(true)
); // true는 1, false는 0으로 변환됨

console.log(
  typeof 'a', isNaN('a'), Number.isNaN('a')
); // ⚠️ 특정 숫자로 변환 불가인 문자의 경우 차이

console.log(
  typeof (1/'a'), isNaN(1/'a'), Number.isNaN(1/'a')
); // NaN값인 경우

console.log(
  +'100',
  -'100',
  +'abc' // 숫자로 변환될 수 없는 문자열
);

x = '100';
console.log(x++, x);

// 숫자로 변환될 수 없는 문자열
// 첫 번째 값 주의 - 증가 이전에도 변환
z = 'abc';
console.log(z++, z);