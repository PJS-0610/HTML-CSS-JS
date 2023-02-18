// 특정 숫자값으로 인식되는 것
console.log(
  new Number('-123.4567'),
  new Number('Infinity'),
  new Number(true),
  new Number(false)
);
// NaN
console.log(
  new Number('1/2'),
  new Number('123ABC'),
  new Number('ABC'),
  new Number('{a: 1, b: 2}'),
  new Number([1, 2, 3])
);

const num1 = Number('123');
const num2 = Number('-123.45');
const num3 = Number(true);
const num4 = Number(false);
const num5 = Number(null);

console.log(typeof num1, num1);
console.log(typeof num2, num2);
console.log(typeof num3, num3);
console.log(typeof num4, num4);
console.log(typeof num5, num5);


console.log(Number.EPSILON);
console.log(0.1 + 0.2);
console.log((0.1 + 0.2) - 0.3 < Number.EPSILON)
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.NaN);


console.log(
  isFinite(null), // null을 0으로 변환
  Number.isFinite(null)
);
console.log(
  isNaN('abc'), // 숫자타입의 NaN으로 변환
  Number.isNaN('abc') // 숫자타입 자체가 아니므로 false
);
console.log(
  Number.parseInt('123.4567'),
  Number.parseFloat('123.4567')
);
console.log(
  Number.isInteger(123),
  Number.isInteger(123.45)
);
console.log(
  // 암묵적 변환 하지 않음
  Number.isInteger('123'),
  Number.isInteger(true),
  Number.isInteger(Infinity)
);
console.log(
  Number.isSafeInteger(123),
  Number.isSafeInteger(123.45)
);
console.log(
  Number.isSafeInteger(Number.MAX_SAFE_INTEGER),
  Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1)
);
const numInExp = (12.34).toExponential();
console.log(
  typeof(numInExp), numInExp
);
// 인자로 자릿수 제한
console.log(
  (12.34).toExponential(2),
  (12.34).toExponential(4),
  (12.34).toExponential(6)
);
console.log(
  // 인자가 없으면 0을 받은 것과 같음
  (111.234567).toFixed(),
  (111.234567).toFixed(0)
);
console.log(
  (111.234567).toFixed(1),
  (111.234567).toFixed(2)
);
console.log(
  // 반올림
  (111.234567).toFixed(3),
  (111.234567).toFixed(4)
);
console.log(
  // 인자가 없으면 toString처럼 그대로 문자열로 반환
  (1234.56789).toPrecision()
);
// 인자가 정수부 자릿수보다 적으면 지수로
console.log(
  (1234.56789).toPrecision(1),
  (1234.56789).toPrecision(2),
  (1234.56789).toPrecision(3)
);
// 반올림
console.log(
  (1234.56789).toPrecision(4),
  (1234.56789).toPrecision(6),
  (1234.56789).toPrecision(8)
);
console.log(
  (11).toString(),
  (11).toString(2),
  (11).toString(8),
  (11).toString(16)
);
