console.log(globalThis.Infinity);
console.log(globalThis.NaN);
console.log(globalThis.undefined);
console.log(
  globalThis == globalThis.globalThis,
  globalThis == globalThis.globalThis.globalThis,
  globalThis == globalThis.globalThis.globalThis.globalThis
);


const x = eval('1 + 2 + 3');

// 객체나 함수의 리터럴은 괄호로 감싸야 함
const obj = eval('({a: 1, b: 2})');

console.log(x, obj);


console.log(
  isFinite(1),
  isFinite(0),
  isFinite('1'),
  isFinite(null)
);
console.log(
  isFinite(1/0),
  isFinite(Infinity),
  isFinite(-Infinity),
  isFinite(NaN),
  isFinite('abc')
);
console.log(
  isNaN(NaN),
  isNaN('abcde'),
  isNaN({}),
  isNaN(undefined)
);
console.log(
  parseFloat(123.4567),
  parseFloat('123.4567'),
  parseFloat(' 123.4567 ')
);
console.log(
  parseFloat('123.0'),
  parseFloat('123'),
  parseFloat(' 123ABC '),
  parseFloat([123, 456, 789])
);
console.log(
  parseFloat('ABC123'),
  parseFloat({x: 1}),
  parseFloat([]),
  parseFloat(['a', 1, true])
);
console.log(
  parseInt(123),
  parseInt('123'),
  parseInt(' 123.4567 '),
  parseInt('345.6789')
);
console.log(
  parseInt('abc'),
  parseInt('{}'),
  parseInt('[]')
);
console.log(
  parseInt('11'),
  parseInt('11', 2),
  parseInt('11', 8),
  parseInt('11', 16),
  parseInt('11', 32),

  parseInt('11', 37),
  parseInt('11', 'A'),
);
const searchURI = 'https://www.google.com/search?q=얄코';
const encodedURI = encodeURI(searchURI);
console.log(encodedURI);

const keyword = '얄코';
const encodedKeyword = encodeURIComponent(keyword);
console.log(encodedKeyword);


const searchURI1 = `https://www.google.com/search?q=${encodedKeyword}`;
console.log(searchURI1);


const raw = '?q=얄코';
console.log(encodeURI(raw));
console.log(encodeURIComponent(raw));

const encodedURI11 = 'https://www.google.com/search?q=%EC%96%84%EC%BD%94';
const decodedURI = decodeURI(encodedURI11);
console.log(decodedURI);


const encodedComp = '%EC%96%84%EC%BD%94';
const decodedComp = decodeURI(encodedComp);

console.log(decodedComp);