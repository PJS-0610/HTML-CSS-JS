// 💡 변수이므로 let이 사용됨
for (let i = 0; i < 5; i++) {
  console.log(i);
}

for (let x = 0, y = 10; x <= y; x++, y--) {
  console.log(x, y);
}

//무한루프
// let x = 0;

// for (;;) {
//   console.log(x);
// }

// console.log('출력 안됨');


const lunch = {
  name: '라면',
  taste: '매운맛',
  kilocalories: 500,
  cold: false
}

for (const key in lunch) { // 💡 변할 것이 아니므로 const 사용
  console.log(key, ':', lunch[key])
}

const list = [1, '가나다', false, null];

for (const item of list) {
  console.log(item);
}
// 문자열 역시 이터러블이므로 사용 가능
for (const letter of '안녕하세요~') {
  console.log(letter);
}

const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbers2 = [];

for (let num of numbers1) {
  num++; // ⚠️ 복사된 값. let 사용 주목
  numbers2.push(num + 1);
}
console.log(numbers1, numbers2);



//continue 루프를 건너뜀
for (let i = 1; i <= 10; i++) {
  if (i % 3 === 0) continue;
  console.log(i);
}

console.log('for 루프 종료');


//break 종료하고 빠져나옴
for (let i = 1; i <= 10; i++) {
  if (i === 5) break;
  console.log(i);
}

console.log('for 루프 종료');

//label 중첩된 반복문을 명명하여 continue or break에 사용
outer:
for (let i = 1; i < 10; i++) {

  inner:
  for (let j = 1; j < 10; j++) {

    if (j % 2 === 0) continue inner;
    if (i * j >= 30) continue outer;
    
    if (j > 8) break inner;
    if (i - j > 7) break outer;

    console.log(i, j, i * j);
  }
}