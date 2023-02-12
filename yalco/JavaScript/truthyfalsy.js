console.log(
  1.23 ? true : false,
  -999 ? true: false,
  '0' ? true : false,
  ' ' ? true : false,
  Infinity ? true : false,
  -Infinity ? true : false,
  {} ? true : false,
  [] ? true : false,
);

// ⚠️ true와 `같다`는 의미는 아님
console.log(
  1.23 == true,
  ' ' == true,
  {} == true
);

console.log(
  0 ? true : false,
  -0 ? true : false,
  '' ? true : false,
  null ? true : false,
  undefined ? true : false,
  NaN ? true : false,
);

// 💡 어떤 값들은 false로 타입변환됨
console.log(
  0 == false,
  0 === false,
  '' == false,
  '' === false
);
console.log(
  null == false,
  undefined == false,
  NaN == false,
);

// x는 0이므로 false y는 양수이므로 true 즉 and 구문이므로 x && x++;는 실행이 안됨
//코드를 실행해보면 0,2가 나옴
let x = 0;
let y = 1;

x && x++;
y && y++;

console.log(x, y);


x = 2;
y = 3;

console.log(
  x % 2 ? '홀' : '짝',
  y % 2 ? '홀' : '짝'
);

x = '';
y = '회사원';
let z = x || y;

console.log(z);

x = x || '단기알바';
y = y || '단기알바';

console.log(x, y);

// 한 번 부정
console.log(
  !1, !-999, !'hello',
  !0, !'', !null
);

// ⭐️ 두 번 부정하여 해당 boolean값으로
console.log(
  !!1, !!-999, !!'hello',
  !!0, !!'', !!null
);

x = 123;

console.log(
  'x는 홀수인가?',
  !!(x % 2)
);