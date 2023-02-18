const now = new Date();

console.log(typeof now);
console.log(now);
const nowStr = Date()
console.log(typeof nowStr);
console.log(nowStr);

console.log(
  new Date(0)
);
console.log(
  new Date(1000 * 60 * 60 * 24 * 365 * 30)
);

console.log(
  new Date(2022, 8)
);

console.log(
  new Date(2022, 8, 20, 14, 35)
);

console.log(
  new Date(2022, 8, 20, 14, 35, 47, 789)
);

console.log(
  new Date('August 20, 2022 14:35:47')
);

console.log(
  new Date('2022-08-20T14:35:47')
);

console.log(Date.now());

console.log(
  // 💡 시스템(실행 컴퓨터) 시간이 한국이면 시차 9시간 적용
  Date.parse('August 20, 2022 09:00:00')
);

const now1 = new Date();
console.log(
  now1.toString()
);
console.log(
  now1.toDateString()
);
console.log(
  now1.toTimeString()
);

const now2 = new Date();
console.log(
  now2.toString()
);
console.log(
  now2.toLocaleString()
);
console.log(
  now2.toLocaleString('ko-KR')
);
console.log(
  now2.toLocaleString('en-US')
);
console.log(
  now2.toLocaleString('de-DE')
);

const now3 = new Date();
console.log(now3.toString());
for (i of [
  [ '연:', now3.getFullYear() ],
  [ '월:', now3.getMonth() ], // 0 ~ 11
  [ '일:', now3.getDate() ],
  [ '요일:', now3.getDay() ], // 0부터 일월화수목금토 
  [ '시:', now3.getHours() ],
  [ '분:', now3.getMinutes() ],
  [ '초:', now3.getSeconds() ],
  [ '밀리초:', now3.getMilliseconds() ]
]) {
  console.log(i[0], i[1]);
}

const now4 = new Date();
console.log(now4.toString());
now4.setFullYear(2022);
now4.setMonth(7);
now4.setDate(20);
// 💡 요일은 setter가 없음
now4.setHours(14);
now4.setMinutes(35);
now4.setSeconds(47);
now4.setMilliseconds(789);
console.log(now4.toString());


const now5 = new Date();

const year = now5.getFullYear();
const month = now5.getMonth() + 1;
const date = now5.getDate();
const day = '일월화수목금토'[now5.getDay()];
console.log(
  `오늘은 ${year}년 ${month}월 ${date}일, ${day}요일입니다.`
);

//밀리초 숫자값을 set/get
const date1 = new Date(2020, 7, 20);
const date1value = date1.getTime();
console.log(date1.toString());
console.log(date1value);
const date2 = new Date();
console.log(date2.toString());
date2.setTime(date1value);
console.log(date2.toString());

//UTC의 시간차를 분 단위로 반환(한국의 경우 9시간)
console.log(
  new Date().getTimezoneOffset() / 60
);

//ISO 8061이란 형식의 문자열 반환
const now6 = new Date();
// 시간차 존재
console.log(
  now6.toISOString()
);
console.log(
  now6.toString()
);


const now11 = new Date();
const timezoneOffset = now11.getTimezoneOffset() * 60000;
const isoStr = new Date(now11.getTime() - timezoneOffset).toISOString();
console.log(isoStr);
console.log(now11.toString());