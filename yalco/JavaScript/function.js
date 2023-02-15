function isOdd (x) {
  return !!(x % 2);
}

let num = 12;

console.log(
  `${num}(는)은 ${
    isOdd(num) ? '홀' : '짝'
  }수입니다.`
);

// 한 줄 안에 값만 반환시
const mult = (x, y) => x * y;

console.log(mult(2, 7));