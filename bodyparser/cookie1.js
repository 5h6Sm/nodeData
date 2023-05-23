const express = require('express');
const app = express();
const port = process.env.PORT || 3000




// var cookieParser = require('cookie-parser');

var cookieParser = require('cookie-parser'),
    errorHandler = require('errorhandler');

//에러 핸들러 모듈 사용
var expressErrorHandler = require('express-error-handler');

app.use(cookieParser('secret'))

var router = express.Router();

//쿠키 옵션 설정
// 웹서버를 통해서만 쿠키에 저비근
// 쿠키의 수명을 밀리초로 설정
// 쿠키의 암호화

const cookieConfig = {
    httpOnly: true,
    maxAge: 1000000,
    signed: true
};

app.get('/', function(req, res) {
    res.send('<h1>Express Simple Server</h1>');
});

//쿠키설정
// app.get('/setcookie', function(req, res) {
//     res.cookie('cookieName', 'cookieValue', cookieConfig)
//     res.cookie('user', {
//         name: 'bts',
//         data: 100
//     });
//     res.redirect('/getcookie');
// })

router.route('/setcookie').get(function(req, res) {
    console.log('setcookie 라우팅 함수 호출됨');
    res.cookie('cookieName', 'cookieValue', cookieConfig)
    res.cookie('user', {
        name: 'bts',
        data: 100
    });
    res.redirect('/getcookie');
})

//쿠키 확인
router.route('getcookie').get(function(req, res) {
    console.log('/getcookie 라우팅 함수 호출됨');
    res.send(req.cookies);
});

// 404 에러페이지 처리
var errorHandler = expressErrorHandler({
    static: {
        '404': './public/404.html'
    }
});

app.use(expressErrorHandler.httpError(404));
app.use(errorHandler);

// app.get('/getcookie', (req, res) => {
//     res.send(req.cookies);
// })

app.listen(port, () => {
    console.log('http://127.0.0.1:3000');
});