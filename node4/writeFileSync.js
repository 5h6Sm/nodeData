// const fs = require('fs');

// fs.writeFileSync('output.txt', '안녕하세요...!');
// console.log('파일 쓰기를 완료했습니다.');

// 비동기
const fs = require('fs');

fs.writeFileSync('output.txt', '안녕하세요...!', (error) => {
    console.log('파일 쓰기를 완료했습니다.');
});