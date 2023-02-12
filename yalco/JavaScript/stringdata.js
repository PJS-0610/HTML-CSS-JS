let word1 = '작은따옴표 안에 "큰따옴표" 사용';
let word2 = "큰따옴표 안에 '작은따옴표' 사용";
console.log(word1, word2);


// ⚠️ 오류 발생
// let word3 = '작은따옴표 안에 '작은따옴표' 사용';
// let word4 = "큰따옴표 안에 "큰따옴표" 사용";
// console.log(word3, word4);

// ⭐️ 이스케이프 표현(escape sequence)
let word5 = '작은따옴표 안에 \'작은따옴표\' 사용';
let word6 = "큰따옴표 안에 \"큰따옴표\" 사용";
console.log(word5, word6);

/* 이스케이프 표현
\'  작은따옴표
\"  큰따옴표
\n  줄바꿈
\t  탭
\\  백슬래시 */

// let longName = '김수한무 거북이와 두루미 삼천갑자 동방삭 치치카포 사리사리센타 워리워리 세브리깡 무두셀라 구름이 허리케인에 담벼락 담벼락에 서생원 서생원에 고양이 고양이엔 바둑이 바둑이는 돌돌이';

let longName = '김수한무 거북이와 두루미 \
삼천갑자 동방삭 치치카포 사리사리센타 \
워리워리 세브리깡 무두셀라 구름이 \
허리케인에 담벼락 담벼락에 서생원 \
서생원에 고양이 고양이엔 바둑이 \
바둑이는 돌돌이';

// ⚠️ 줄바뀜 되는 것이 아님
// 큰따옴표도 마찬가지
console.log(longName);