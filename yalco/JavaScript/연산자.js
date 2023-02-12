// x===y 자료형도 값도 같다
// x!==y 자료형 또는 값이 다르다

console.log('Hello!' === 'hello!');


console.log(
  '1' == '1',
  '1' == 1,
  '1' == 2
);

console.log(
  '1' != '1',
  '1' != 1,
  '1' != 2
);

console.log(
  '1' === '1',
  '1' === 1,
  '1' === 2
);

console.log(
  '1' !== '1',
  '1' !== 1,
  '1' !== 2
);

let result = '안녕' + 1 + true;

console.log(result);
console.log(typeof result);


result += null;
result += undefined;

console.log(result);
console.log(typeof result);