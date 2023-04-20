// 요청이 왔을때, 클라이언트의 요청 헤더에서 User-Agent속성을 추출
// 모듈을 추출합니다
var express = require('express');

// 서버를 생성합니다.
var app = express();

// 미들웨어를 설정합니다
app.use(function(req, res){
    // User-Agent 속성을 추가합니다.
    var agent = req.header('User-Agent');
    console.log(req.headers);
    console.log(agent);

    // 응답합니다.
    // 상대 코드만 보낼 때는 sendStatus() 메서드를 사용합니다.
    res.sendStatus(200);
});

// 서버를 실행합니다.
app.listen(3000, function(){
    console.log('Server running at http://127.0.0.1:3000');
})