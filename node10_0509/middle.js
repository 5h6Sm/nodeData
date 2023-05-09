//모듈을 추출합니다
var express = require('express');

// 서버를 생성합니다
var app = express();

// 미들웨어를 설정합니다.
app.use(function(req, res, next){
    // 데이터를 추가합니다.
    req.number = 52;
    res.number = 273;
    next();
});

app.use(function(req, res, next){
    // 응답합니다
    res.send('<h1>' + req.number + " : " + res.number + '</h1>');
});

// 서버실행
app.listen(3000, function(){
    console.log('Server running at http://127.0.0.1:3000');
})