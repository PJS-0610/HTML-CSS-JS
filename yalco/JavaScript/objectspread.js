const class1 = {
  x: 1, y: 'A', z: true
};

const class2 = { ...class1 };

// 아래의 참조복사 코드와 다름!
// const class2 = class1;

console.log(class2);


const class11 = {
  a: 1, b: 'A', c: true
};
const class22 = {
  d: { x: 10, y: 100 }, e: [1, 2, 3]
};
const class3 = {
  ...class11, z: 0
}
const class4 = {
  ...class22, ...class3, ...class22.d
}
console.log(class3);
console.log(class4);
const class111 = {
  ...{ a: 1, b: 2 },
  ...{ b: 3, c: 4, d: 5 },
  ...{ c: 6, d: 7, e: 8 }
}

console.log(class111);


const class12 = {
  x: 1,
  y: { a: 2 },
  z: [3, 4]
};

const class23 = { ...class12 };
class12.x++;
class12.y.a++;
class12.z[0]++;
console.log(class12);
console.log(class23);