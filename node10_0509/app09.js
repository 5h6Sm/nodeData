// 라우팅 매개변수 추출
var express = require('express');

// 서버를 생성
var app = express();

app.get('/users/:userId/:bookId', function(request, response){
    // 1)변수 선언
    // let user = request.params.userId;
    // let book = request.params.bookId;
    // response.send('<h1>' + user + book + ' page</h1>');
    // response.send('<h1>' + user + book + 'Page</h1>');
    response.send(request.params);
});

// 서버 실행
app.listen(3000, function(){
    console.log('server running at http://127.0.0.1:3000');
})