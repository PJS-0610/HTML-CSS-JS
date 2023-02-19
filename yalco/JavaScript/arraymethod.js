console.log(
  Array.isArray([1, 2, 3]),
  Array.isArray('123'),
  Array.isArray('123'.split(''))
);


const arrays = [
  [], [1, 2, 3], new Array(),
  // ⚠️ instanceof에서는 결과가 다름
  Array.prototype // 배열임
];
const notArrays = [
  1, 'abc', true, null, {}
];

for (const item of arrays) {
  console.log(
    item,
    Array.isArray(item),
    item instanceof Array
  );
}

for (const item of notArrays) {
  console.log(
    item,
    Array.isArray(item),
    item instanceof Array
  );
}


const arr = [
  '한놈', '두시기', '석삼', '너구리', '오징어'
];

console.log(
  arr.at(1), arr.at(2)
);


const arr1 = [1, 2, 3, 'abc', true];

console.log(
  arr1.includes(2),
  arr1.includes('abc'),
  arr1.includes(true),
  arr1.includes(false),
);

const obj1 = { x: 1, y: 2 };
const obj2 = { x: 1, y: 2 };
const arrr = [
  obj1,
  { x: 3, y: 4 }
];
console.log(
  arrr.includes(obj1),
  arrr.includes(obj2),
  arrr.includes({ x: 1, y: 2 }),
  arrr.includes({ x: 3, y: 4 })
);


const arrq = [1, 2, 3, 2, 1];

console.log(
  arrq.indexOf(2),
  arrq.lastIndexOf(2),
  arrq.indexOf(4)
);


const arr11 = ['a', 'b', 'c', 'd', 'e'];
const arr2 = [
  1, true, null, undefined, '가나다', { x: 0 }, [1, 2, 3]
];
console.log(
  arr11.join() // 인자가 없다면 쉼표`,`로
);
console.log(
  arr11.join('')
);
console.log(
  arr2.join(':')
);


console.log(
  classIntro(3, '김민지', '영희', '철수', '보라')
); // 호이스팅

function classIntro (classNo, teacher, ...children) {

  // [ 4-3강 예제 ]

  // let childrenStr = '';
  // for (const child of children) {
  //   if (childrenStr) childrenStr += ', ';
  //   childrenStr += child;
  // }
  // return `${classNo}반의 선생님은 ${teacher}, `
  //   + `학생들은 ${childrenStr}입니다.`

  return `${classNo}반의 선생님은 ${teacher}, `
    + `학생들은 ${children.join(', ')}입니다.`
}