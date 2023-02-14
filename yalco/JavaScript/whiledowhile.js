//while

let x = 0;

while (x < 10) {
  console.log(x++);
}


x = 0;

while (true) {
  if (x++ >= 5) break; // 😎
  console.log(x);
}
// 1 ~ 5 출력


while (x < 14) {
  const xNow = x++;

  if (xNow % 2 === 0) continue;
  if (xNow > 7) break;

  console.log(xNow);
}

//do while
x = 12;

do {
  console.log(x++);
} while (x < 10);