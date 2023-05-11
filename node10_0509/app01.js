//public/이미지.jpg 줁비
//모듈을 추출합니다

var express = require('express');
var static = require('serve-static');

//서버를 생성합니다.
var app = express();

//미들웨어를 설정합니다.
app.use(express.static(__dirname + '/public')); //루트로 public안의 파일접근가능
app.use(function(req, res){
    //응답합니다.
    res.writeHead(200, {'Content-Type':'text/html'});
    res.end('<img src="/hinata.png" width="100%"/>');
});

//서버를 실행합니다
app.listen(3000, function(){
    console.log('http://127.0.0.1:3000');
});