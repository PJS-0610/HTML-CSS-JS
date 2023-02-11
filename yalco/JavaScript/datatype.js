const a = true, b = 123.45, c = '안녕하세요!';
d = null;
const e = Symbol('hello');

console.log(a, typeof a);   //boolean 참 또는 거짓 반환
console.log(b, typeof b);   //자바스크립트는 정수 실수 구분이 없이 number임 2^53-1 까지 표현 가능 그 보다 큰 수는 Bigint로 표현
console.log(c, typeof c);   //"" 또는 ''로 둘러쌓인 텍스트 데이터
console.log(d, typeof d); // null: 의도적으로 빈값을 의미 null도 값임 'object'(객체) 등이 들어있거나 반환되어야 하지만  없을때 사용됨

// null 여부는 아래와 같이 확인할 것
console.log(d === null);

console.log(typeof e); // 이건 나중에

let x;
console.log(typeof x);    //undefined: 값이 부여되지 않은 상태 그러나 undefined도 값임