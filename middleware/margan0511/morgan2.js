//모듈 추출
var express = require('express');
var morgan = require('morgan');

//서버 생성
var app = express();

//미들 웨어 설정
app.use(morgan(':method + :date'));
app.use(function(require, response){
    response.send('<h1>express Basic</h1>');
});

//서버 실행
app.listen(3000, function(){
    console.log('Server running at http://127.0.0.1:3000');
});