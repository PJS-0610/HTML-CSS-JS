function getIntroFunc (name, formal) {
  return formal
  ? function () {
    console.log(`안녕하십니까, ${name}입니다.`);
  } : function () {
    console.log(`안녕하세요~ ${name}이라고 해요.`);
  }
}

const hongIntro = getIntroFunc('홍길동', true);
const jeonIntro = getIntroFunc('전우치', false);
hongIntro();
jeonIntro(); 

const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => a / b;

function comb3ArmFuncs(armFunc1, armFunc2, armFunc3) {
  return (x, y) => armFunc3(armFunc2(armFunc1(x, y), y), y);
}

const add_mul_sub = comb3ArmFuncs(add, mul, sub);
const mul_add_div = comb3ArmFuncs(mul, add, div);
const div_add_mul = comb3ArmFuncs(div, add, mul);
console.log(
  add_mul_sub(10, 4),
  mul_add_div(10, 4),
  div_add_mul(10, 4)
);

