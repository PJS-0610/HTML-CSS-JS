const person1 = {
  age: 17,

  get koreanAge () {
    return this.age + 1;
  },

  set koreanAge (krAge) {
    this.age = krAge - 1;
  }
}
console.log(person1, person1.koreanAge);
person1.koreanAge = 20;
console.log(person1, person1.koreanAge);


class YalcoChicken {
  constructor (name, no) {
    this.name = name;
    this.no = no;
  }
  get chainTitle() {
    return `${this.no}호 ${this.name}점`;
  }
  set chainNo(chainNo) {
    if (typeof chainNo !== 'number') return;
    if (chainNo <= 0) return;
    this.no = chainNo;
  }
}
const chain1 = new YalcoChicken('판교', 3);
console.log(chain1.chainTitle);
chain1.chainNo = '4';
console.log(chain1);
chain1.chainNo = -1;
console.log(chain1);
chain1.chainNo = 4;
console.log(chain1);

class Employee {
  #name = '';
  #age = 0;
  constructor (name, age) {
    this.#name = name;
    this.#age = age;
  }
}

const emp11 = new Employee('김복동', 32);
console.log(emp11);
// console.log(emp1.#name); // ⚠️ 오류 발생
console.log(emp11['#name']); // ⚠️ undefined 반환

class Employee1 {
  #name = '';
  #age = 0;
  constructor (name, age) {
    this.#name = name;
    this.#age = age;
  }
  get name () {
    // [n]: n + 1 번째 글자를 반환
    return this.#name[0] + '모씨';
  }
  get age () {
    return this.#age - (this.#age % 10) + '대';
  }
  set age (age) {
    if (typeof age === 'number' && age > 0) {
      this.#age = age;
    };
  }
  getOlder(years) { this.#age += years; }
}

const emp1 = new Employee1('김복동', 22);
console.log(emp1.name, emp1.age)
emp1.age = 0;
console.log(emp1.age);
emp1.age = 35;
console.log(emp1.age);
emp1.getOlder(20);
console.log(emp1.age);