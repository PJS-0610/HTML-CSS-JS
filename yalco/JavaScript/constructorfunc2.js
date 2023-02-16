function YalcoChicken (name, no) {
  this.name = name;
  this.no = no;
  this.introduce = function () {
    return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
  }
}

const chain1 = new YalcoChicken('판교', 3);
console.log(chain1);
// 본사에서 새 업무를 추가
// 프로토타입: 본사에서 배포하는 메뉴얼이라고 이해
YalcoChicken.prototype.introEng = function () {
  return `Welcome to Yalco Chicken at ${this.name}!`;
};
console.log(chain1.introEng());
console.log(new YalcoChicken('강남', 17).introEng());

function YalcoChicken (name, no) {
  this.name = name;
  this.no = no;
  this.introduce = function () {
    return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
  }
}

function createYalcoChicken (name, no) {
  return {
    name, no,
    introduce () {
      return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
    }
  }
}

// 객체 리터럴
const chain0 = {
  name: '판교', no: 3,
  introduce: function () {
    return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
  }
};

// 객체 반환 함수
const chain2 = createYalcoChicken('강남', 17);

// 생성자 함수
const chain3 = new YalcoChicken('제주', 24);
console.log(chain0, chain0 instanceof YalcoChicken);
console.log(chain2, chain2 instanceof YalcoChicken);
console.log(chain3, chain3 instanceof YalcoChicken);

function YalcoChicken (name, no) {
  this.name = name;
  this.no = no;
  this.introduce = function () {
    return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
  }
}

// 본사의 정보와 업무
YalcoChicken.brand = '얄코치킨';
YalcoChicken.contact = function () {
  return `${this.brand}입니다. 무엇을 도와드릴까요?`;
};

const chain11 = new YalcoChicken('판교', 3);
console.log(YalcoChicken.contact());
// console.log(chain11.contact());