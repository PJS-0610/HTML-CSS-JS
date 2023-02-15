// ⭐️ 함수의 자료형
function addNumbers (a, b) { return a + b; }
console.log(typeof addNumbers);

function isOddNum (number) {
  console.log(
    (number % 2 ? '홀' : '짝')
    + '수입니다.'
  );
  return number % 2 ? true : false;
};

const checkIfOdd = isOddNum; // 뒤에 괄호 없음 유의
console.log(checkIfOdd(23));

let person = {
  name: '홍길동',
  age: 30,
  married: true,
  introduce: function (formal) {
    return formal
    ? '안녕하십니까. 홍길동 대리라고 합니다.'
    : '안녕하세요, 홍길동이라고 해요.';
  }
};

console.log(person.introduce(true));
console.log(person.introduce(false));

let arithmetics = [
  (a, b) => a + b,
  (a, b) => a - b,
  (a, b) => a * b,
  (a, b) => a / b
];

for (arm of arithmetics) {
  console.log(arm(5, 3));
}

let prson = {
  name: '홍길동',
  age: 30,
  married: true,
  introduce: function () {
    return `저는 ${this.name}, ${this.age}살이고 `
    + `${this.married ? '기혼' : '미혼'}입니다.`;
  }
}

console.log(prson.introduce());

// calculate
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;

// evaluate
const isOdd = (number) => !!(number % 2);
const isPositive = (number) => number > 0;

function calcAndEval (calc, eval, x, y) {
  return eval(calc(x, y));
}

console.log(
  calcAndEval(add, isOdd, 5, 7),
  calcAndEval(subtract, isPositive, 5, 7),
  calcAndEval(multiply, isOdd, 5, 7)
);