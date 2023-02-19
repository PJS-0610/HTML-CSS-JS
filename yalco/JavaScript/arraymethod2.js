const arr = [1, 2, 3];
const x = arr.push(4);
console.log(x, arr);

const y = arr.push(5, 6, 7); // 최종 길이 반환
console.log(y, arr);


const ar = [5, 6, 7];
const xx = ar.unshift(4);
console.log(xx, ar);
const yy = ar.unshift(1, 2, 3);
console.log(yy, ar);

const a = [1, 2, 3, 4, 5];
const x1 = a.pop();
console.log(x1, a);

const r = [1, 2, 3, 4, 5];
const x2 = r.shift();
console.log(x2, r);


const arr1 = [1, 2, 3, 4, 5, 6, 7];
// 2번 인덱스부터 2개 요소 제거
arr1.splice(2, 2);

console.log(arr1);
// 3번 인덱스부터 요소 제거 없이 'a' 추가
arr1.splice(3, 0, 'a');

console.log(arr1);


const ar1r = [1, 2, 3, 4, 5];
delete ar1r[2];

console.log(ar1r);


// 중간의 빈 값도 채움
const arr11 = [1, 2, , , 4, 5];
arr11.fill(7);

console.log(arr11);


// 💡 특정 값으로 채운 배열 생성시 유용
const arr2 = new Array(10);
arr2.fill(1);

console.log(arr2);
// 인자가 셋일 때: (채울 값, ~부터, ~ 전까지)
arr2.fill(3, 6, 9);

console.log( arr2);


const arar = [1, 2, 3, 4, 5, 6, 7];
console.log(arar);
// 💡 메서드 자체도 뒤집힌 배열을 반환
arrRev = arar.reverse();

// 원본 배열 뒤집힘
console.log(arar, arrRev);

arrRev[0] = 0;

// ⭐ 반환된 배열은 원본과 같은 배열을 참조! (복사가 아님)
console.log(arar, arrRev);


const r1 = [1, 2, 3];
const r2 = ['a', 'b', 'c'];
const r3 = [true, false];
const arr4 = r1.concat(r2);
console.log(arr4);
const arr6 = r1.concat('ABC', r2, r3, 100);

console.log(arr6);


const ar1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const ar2 = ar1.slice(3);
const ar3 = ar1.slice(3, 7);

console.log(ar2, ar3);
// 원본에는 변화 없음
console.log(ar1);


const orgArr = [
  1, 2,
  [3, 4],
  [5, [6, [7, 8]]]
];

// 인자가 없으면 1을 넣은 것과 같음
const aarr0 = orgArr.flat();
const aarr1 = orgArr.flat(1);
const aarr2 = orgArr.flat(2);
const aarr3 = orgArr.flat(3);
console.log('N:', aarr0);
console.log('1:', aarr1);
console.log('2:', aarr2);
console.log('3:', aarr3);