const food1 = {
  name: '햄버거',
  price: 5000,
  vegan: false
};

console.log(food1);
console.log(
  food1.name, // 💡 마침표 프로퍼티 접근 연산자
  food1['price'] // 💡 대괄호 프로퍼티 접근 연산자
);

// 빈 객체 생성
const food2 = {};
console.log(food2);
// 프로터피 추가
food2.name = '샐러드';
food2.price = '6000';
food2['vegan'] = true;
console.log(food2);

// 프로터피 수정
food2['price'] = '6500';
food2.vegan = false;
console.log(food2);

let idx = 0;
const  obj = {
  ['key-' + ++idx]: `value-${idx}`,
  ['key-' + ++idx]: `value-${idx}`,
  ['key-' + ++idx]: `value-${idx}`,
  [idx ** idx]: 'POWER'
}

console.log(obj);


const person1 = {
  name: '홍길동',
  age: 24,
  school: '한국대',
  major: '컴퓨터공학'
};

console.log(person1);
delete person1.age;
console.log(person1);
delete person1['major'];
console.log(person1);
// 💡 오류가 발생하지는 않음
delete person1.hobby;
console.log(person1);

const product1 = {
  name: '노트북',
  color: 'gray',
  price: 800000
}

function addModifyProperty (obj, key, value) {
  // obj.key = value; // ⚠️ 의도와 다른 작업 수행
  obj[key] = value;
}
function deleteProperty (obj, key) {
  // delete obj.key // ⚠️ 의도와 다른 작업 수행
  delete obj[key];
}
addModifyProperty (product1, 'inch', 16);
console.log(product1);
addModifyProperty (product1, 'price', 750000);
console.log(product1);
deleteProperty(product1, 'color');
console.log(product1);

function createProduct (name, price, quantity) {
  return { name, price, quantity };
}

const product3 = createProduct('선풍기', 50000, 50);
const product2 = createProduct('청소기', 125000, 32);

console.log(product3, product2);


// 일반 함수 프로퍼티 정의
const person = {
  name: '홍길동',

  salutate: function (formal) {
    return formal
    ? `안녕하십니까, ${this.name}입니다.`
    : `안녕하세요, ${this.name}이에요.`;
  }
}
console.log(person.salutate(true));

// ⭐️ 메서드 정의
const person2 = {
  name: '홍길동',
  
  salutate (formal) {
    return formal
    ? `안녕하십니까, ${this.name}입니다.`
    : `안녕하세요, ${this.name}이에요.`;
  }
}
console.log(person2.salutate(true));