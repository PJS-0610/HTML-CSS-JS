console.log(
  Math.PI
);
console.log(
  Math.E
);
console.log(
  Math.abs(123),
  Math.abs(-123),
);
// 0 반환
console.log(
  Math.abs(0),
  Math.abs(''),
  Math.abs(null),
  Math.abs([]),
);
// NaN 반환
console.log(
  Math.abs('abc'),
  Math.abs(undefined),
  Math.abs({a: 1}),
  Math.abs([1, 2, 3]),
  Math.abs()
);

const isEqual = (a, b) => {
  return Math.abs(a - b) < Number.EPSILON;
}
console.log(
  isEqual(0.1 + 0.2, 0.3)
);

for (const num of [1.4, 1.6, -1.4, -1.6]) {
  console.log(
    num + ' : ',
    Math.ceil(num),
    Math.round(num),
    Math.floor(num),
    Math.trunc(num),
  );
}

console.log(
  Math.pow(4, 2), // 4 ** 2
  Math.pow(4, 1), // 4 ** 1
  Math.pow(4, 0), // 4 ** 0
  Math.pow(4, -1) // 4 ** -1
);

// NaN 반환
console.log(
  Math.pow(4)
);

console.log(
  Math.sqrt(25), // 25 ** 0.5
  Math.sqrt(9),
  Math.sqrt(2),
  Math.sqrt(1),
  Math.sqrt(0)
);

console.log(
  Math.max(8, 5, 9, 6, 3, 1, 4, 2, 7),
  Math.min(8, 5, 9, 6, 3, 1, 4, 2, 7)
);

for (let i = 0; i < 3; i++) {
  console.log(Math.random());
}

for (let i = 0; i < 3; i++) {
  console.log(
    Math.floor(Math.random() * 10)
  );
}

console.log(
  // 1(또는 근사값) 반환
  Math.sin(Math.PI / 2),
  Math.cos(Math.PI * 2),
  Math.tan(Math.PI / 180 * 45)
);

console.log(
  // Math.PI / 2 반환
  Math.asin(1),
  Math.acos(0),
  Math.atan(Infinity)
);