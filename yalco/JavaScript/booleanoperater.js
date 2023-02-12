console.log(
  true, !true, false, !false
);

console.log(
  true, !true, !!true, !!!true
);

console.log(
  false, !false, !!false, !!!false
);

console.log(
  true === !false,
  !(1 == '1'),
  !(1 === '1'),
  !(typeof false === 'boolean')
);

//&& - and: 양 쪽 모두 true 반환
console.log(
  true && true,
  true && false,
  false && true,
  false && false,
);

//|| - or: 한 쪽이라도 true 반환
console.log(
  true || true,
  true || false,
  false || true,
  false || false,
);

let error = true;
// error = false;

// 앞의 것이 true일 때만 뒤의 코드 실행
error && console.warn('오류 발생!');

// 앞의 것이 false일 때만 뒤의 코드 실행
error || console.log('이상 없음.');

let x = true;
// x = false;

// ⭐️ &&, || 연산자는 값 자체를 반환
let y = x && 'abc';
let z = x || 123;

console.log(y, z);

x = true;
// x = false;

let a = x ? '참입니다.' : '거짓입니다.';
console.log(a);


let num = 6;

console.log(
  'num은 3의 배수' +
  (num % 3 === 0 ? '입니다.' : '가 아닙니다.')
);

error = true;
//error = false;

error 
  ? console.error('오류 발생!') 
  : console.log('이상 없음');