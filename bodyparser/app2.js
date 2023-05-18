const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/login'));

app.use((request, response) => {
    const userId = request.body.userId || request.query.userId;
    const userPassword = request.body.userPassword || request.query.userPassword;

    response.writeHead('200', { 'Content-Type': 'text/html;charset=utf8' });
    response.write('<h1>Login Id와 PW의 결과 값 입니다.</h1>');
    response.write(`<div><p>${userId}</p></div>`); // 중괄호 수정
    response.write(`<div><p>${userPassword}</p></div>`); // 중괄호 수정
    response.end(JSON.stringify(request.body, null, 2));
});

app.listen(3000, () => {
    console.log('포트 번호 : 3000');
});
