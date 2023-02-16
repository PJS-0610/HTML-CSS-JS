class YalcoChicken {
  constructor (name, no) {
    this.name = name;
    this.no = no;
  }
  introduce () { // 💡 메서드
    return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
  }
}
const chain1 = new YalcoChicken('판교', 3);
const chain2 = new YalcoChicken('강남', 17);
const chain3 = new YalcoChicken('제주', 24);
console.log(chain1, chain1.introduce());
console.log(chain2, chain2.introduce());
console.log(chain3, chain3.introduce());

class Person {
  constructor (name, age, married = false) {
    this.name = name;
    this.age = age;
    this.married = married;
  }
}

const person1 = new Person('박영희', 30, true);
const person2 = new Person('오동수', 18);
console.log(person1, person2);
// 인스턴스 초기화가 필요없는 클래스
class Empty {}
console.log(new Empty());

class Dog {
  bark () {
    return '멍멍';
  }
}
const badugi = new Dog();
console.log(badugi, badugi.bark());

function Dog2 () {
  this.bark = function () {
    return '멍멍';
  }
}
const badug = new Dog2();
console.log(badug, badug.bark());

// 필드값이 지정되어 있으므로 constructor 메서드 필요없음
class Slime {
  hp = 50;
  op = 4;
  attack (enemy) {
    enemy.hp -= this.op;
    this.hp += this.op/4;
  }
}
const slime1 = new Slime();
const slime2 = new Slime();

console.log(slime1, slime2);
slime1.attack(slime2);
console.log(slime1, slime2);

class YalcoChicken1 {
  no = 0;
  menu = { '후라이드': 10000, '양념치킨': 12000 };

  constructor (name, no) {
    this.name = name;
    if (no) this.no = no;
  }
  introduce () {
    return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
  }
  order (name) {
    return `${this.menu[name]}원입니다.`
  }
}
const chain0 = new YalcoChicken1('(미정)');
console.log(chain0, chain0.introduce());
const chain12 = new YalcoChicken1('판교', 3);
console.log(chain12, chain12.introduce());
chain12.menu['양념치킨'] = 13000;

console.log(chain0.order('양념치킨'), chain12.order('양념치킨'));

class YalcoChicken2 {

  // 정적 변수와 메서드
  static brand = '얄코치킨';
  static contact () {
    return `${this.brand}입니다. 무엇을 도와드릴까요?`;
  }

  constructor (name, no) {
    this.name = name;
    this.no = no;
  }
  introduce () {
    return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
  }
}

console.log(YalcoChicken2);
console.log(YalcoChicken2.contact());


class Do1g {
  bark () {
    return '멍멍';
  }
}

console.log(typeof Do1g);
const 개 = Do1g; // 할당될 수 있는 일급 객체
const 바둑이 = new 개();

console.log(바둑이); // 💡 콘솔에 나타난 타입 확인