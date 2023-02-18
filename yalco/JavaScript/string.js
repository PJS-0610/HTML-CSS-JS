const strObj1 = new String();
const strObj2 = new String('Hello World!');

console.log(strObj1);
console.log(strObj2);

console.log(strObj1.valueOf(), strObj1.toString());
console.log(strObj2.valueOf(), strObj2.toString());


const fromNum = new String(123);
const fromBool = new String(true);
const fromArr = new String([1, 'A', false]);
const fromObj = new String({a: 1});

console.log(typeof fromNum, fromNum);
console.log(typeof fromBool, fromBool);
console.log(typeof fromArr, fromArr);
console.log(typeof fromObj, fromObj);
console.log(fromNum.toString());
console.log(fromBool.toString());
console.log(fromArr.toString());
console.log(fromObj.toString());

const str1 = String('Hello World!');
const str2 = String(123);
const str3 = String(true);
const str4 = String({x: 1, y: 2}); // 💡 [object Object]
const str5 = String([1, 2, 3]); // 💡 1,2,3

console.log(typeof str1, str1);
console.log(typeof str2, str2);
console.log(typeof str3, str3);
console.log(typeof str4, str4);
console.log(typeof str5, str5);


const word = 'Hello, World.';
console.log(
  word.toUpperCase(),
  word.toLowerCase()
);
console.log(word);


function areSameWords (word1, word2) {
  return word1.toLowerCase() === word2.toLowerCase();
}

console.log(
  areSameWords('Hello', 'hello'),
  areSameWords('가나다', '가나다'),
  areSameWords('ABC', 'DEF')
);


console.log(
  'Hello World!'.charAt(0),
  '안녕하세요~'.charAt(2)
);


console.log(
  '안녕하세요~'.at(1),
  '안녕하세요~'.at(-1)
);


const word1 = '반갑습니다!';
console.log (
  word1.indexOf('습'),
  word1.lastIndexOf('습')
);


const word2 = '아니, 하나마나한 걸 왜 하나?';
console.log (
  word2.indexOf('하나'),
  word2.lastIndexOf('하나')
);


console.log(
  '가나다라마'.indexOf('하'),
  '가나다라마'.lastIndexOf('하')
);


const sentence = '옛날에 호랑이 한 마리가 살았어요.';
for (const word of ['옛날에', '호랑이', '살았어요.', '나무꾼']) {
  console.log(
    'includes', word, sentence.includes(word)
  );
  console.log(
    'startsWith', word, sentence.startsWith(word)
  );
  console.log(
    'endsWith', word, sentence.endsWith(word)
  );
  console.log('- - - - -');
}


console.log(
  '하루가 7번 지나면 1주일이 되는 거야.'.search(/[0-9]/),
  '하루가 일곱 번 지나면 일주일이 되는 거야.'.search(/[0-9]/)
);


const word3 = 'ABCDEFGHIJKL';
const part = word3.substring(4, 8)
console.log(word3, part);


const word4 = 'ABCDEFGHIJKL';
console.log(
  word4.substring(4)
);


console.log(
  word4.substring(-1),
  word4.substring(4, 100),
  word4.substring(100)
);


const sentence1 = '옛날에 호랑이 한 마리가 살았어요.';

const firstWord = sentence1.substring(
  0, sentence1.indexOf(' ')
);
const lastWord = sentence1.substring(
  sentence1.lastIndexOf(' ') + 1, sentence1.length
);
console.log(firstWord, lastWord);


const word6 = 'ABCDEFGHIJKL';
console.log(
  word6.substring(4, 8),
  word6.slice(4, 8),
);


console.log(
  word6.substring(-4),
  word6.slice(-4)
);


const sentence2 = '옛날에 호랑이 한 마리가 살았어요.';

const firstWord2 = sentence2.slice(
  0, sentence2.indexOf(' ')
);

const lastWord2 = sentence2.slice(
  sentence2.lastIndexOf(' ') + 1 - sentence2.length
);
console.log(firstWord2, lastWord2);


console.log(
  '010-1234-5678'.split('-'),
  'ABC1DEF2GHI3JKL'.split(/[0-9]/)
)


const sentence11 = '옛날에 호랑이 한 마리가 살았어요.';
const splitted = sentence11.split(' ');
const firstWord11 = splitted[0];
const lastWord11 = splitted[splitted.length - 1];
console.log(firstWord11, lastWord11);


const word21 = '  Hello World!  ';
console.log(`--${word21}--`);
console.log(`--${word21.trim()}--`);
console.log(`--${word21.trimStart()}--`);
console.log(`--${word21.trimEnd()}--`);


const word22 = '호이';
console.log(word22.repeat(3));
console.log(word22.repeat(0));
console.log(word22.repeat());



const word33 = '밥 좀 먹자, 밥. 응? 야, 밥 좀 먹자고 밥, 밥!';
console.log(word33.replace('밥', '라면'));

console.log(word33.replace(/밥/g, '라면'));
console.log(word33.replaceAll('밥', '라면'));
console.log(word33.replaceAll(/밥/g, '라면'));