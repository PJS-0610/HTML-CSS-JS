//백틱은 숫자 1 왼쪽 ``을 의미함

let word = `헬로헬로~ 🤩`;
console.log(word);

let sord = `안녕하세요~		반갑습니다!
저는 \\홍길동\\입니다.`;
console.log(sord);

const NAME = '홍길동';
let age = 20;
let married = false;

console.log(
`제 이름은 ${NAME}, 나이는 ${age}세구요, \
${married ? '기혼' : '미혼'}입니다.`
);