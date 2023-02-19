const arr1 = []; // 빈 배열
const arr2 = [1, 2, 3];
const arr3 = [1, , 2, , 3] // 빈 요소(undefined) 표함 배열 생성
console.log(arr1.length, arr1);
console.log(arr2.length, arr2);
console.log(arr3.length, arr3);


const arr = new Array();
console.log(arr);
console.log(arr.length);

const arr11 = new Array(3);
console.log(arr11);
console.log(arr11.length);
console.log(
  arr11[0], arr11[1], arr11[2]
);


// 인자가 하나의 숫자라도 이를 요소로 갖는 배열 생성
const ar1 = Array.of(3);
const ar2 = Array.of(1, 2, 3);
const ar3 = Array.of('ABC', true, null);
console.log(ar1);
console.log(ar2);
console.log(ar3);


const rr1 = Array.from([1, 2, 3]);
const rr2 = Array.from('ABCDE');
const rr3 = Array.from({
  '0': true,
  '1': false,
  '2': null,
  length: 3
});

console.log(rr1);
console.log(rr2);
console.log(rr3);


const arrLike = {
  0: '🍎',
  1: '🍌',
  2: '🥝',
  3: '🍒',
  4: '🫐',
  length: 5
};

// 일반 for문으로 순회 가능
for (let i = 0; i < arrLike.length; i++) {
  console.log(arrLike[i]);
}
// for ... of 문은 이터러블에서만 사용 가능
// for (const item of arrLike) {
//   console.log(item);
// }

// 배열은 이터러블, 성능도 향상
for (const item of Array.from(arrLike)) {
  console.log(item);
}



const r1 = [1, 2, 3];
const r2 = Array.from(r1);
r2.push(4);
console.log(r1, r2);
r1[0] = 0;
console.log(r1, r2);
const r11 = [{x: 1}, {x: 2}];
const r22 = Array.from(r11);
r22.push({x: 3});

// 참조타입 요소의 내부값이 바뀔 경우
r11[0].x = 0;
console.log(r11, r22);


const aarr1 = [1, 2, 3, 4, 5];
const aarr2 = Array.from(aarr1, x => x + 1);
const aarr3 = Array.from(aarr1, x => x * x);
const aarr4 = Array.from(aarr1, x => x % 2 ? '홀' : '짝');
console.log(aarr2);
console.log(aarr3);
console.log(aarr4);