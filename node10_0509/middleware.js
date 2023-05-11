//express 기본 모듈 불러오기
var express = require('express'), http = requrie('http'), path = require('path');

//express의 미들웨어 불러오기
var bodyParser = require('body-parser')
, static = require('serve-static');

//익스프레스 객체 생성
var app = express();

//기본 속성 설정
app.set('port', process.env.PORT||3000);

//body-parser를 이용해 application/x-www-form-urlencoded 파싱
app.use(bodyParser.urlencoded({extended:false}))

//body-parser를 이요해 application.json 파싱
app.use(bodyParser.json())

//이렇게 경로 접근 가능

//요청하는 파일이 없으면 알아서 next를 호출해 다음 미들웨어로 넘어감
//파일을 발견했다면 다음 미들웨어는 실행되지 않음
//지정한 폴더에 있는 내용을 모두 웹 서버 루트 폴더에 올림.

// app.use('요청 경로', express.static('실제경로'));
// app.use('/', express.static(path.join(__dirname, 'public)));
app.use('/public', static(path.join(__dirname, 'public')));

//컨텐츠 요청 주소와 실제 컨텐츠의 경로를 다르게 만들 수 있음
//요청 주소 localhost:3000/stylesheets/style.css
//실제 컨텐츠 경로 /public/stulesheets/style.css
//서버의 구조를 파악하기 어려워져서 보안에 도움이 됨

//라우터 사용하여 라우팅 함수 등록
var router = express.Router();

router.route('/process/login/:name').post(function(req, res){
    console.log('/process/login/:name 처리함');

    var paramName = req.params.name;

    var paramId = req.body.id||req.query.id;
    var paramPassword = req.body.password||req.query.password;

    res.writeHead('200', {'Contnet-Type':'text/html;charset=utf8'});
    res.write('<h1>Express 서버에서 응답한 결과입니다.</h1>');
    res.write('<div><p>Param name : ' + paramName + '</p></div>');
    res.write('<div><p>Param id : ' + paramId + '</p></div>');
    res.write('<div><p>Param password : ' + paramPassword + '</p></div>');
    res.write("<br><br><a href='/public/login3.html'>로그인 페이지로 돌아아기</a>");
    res.end();
});

app.use('/',router);

//등록되지 않은 패스에 대해 페이지 오류 응답
app.all('*', function (req, res){
    res.status(404).send('<h1>Error - 페이지를 찾을 수 없습니다.</h1>');
});

//Express 서버 시작
http.createServer(app).listen(app.get('port'),function(){
    console.log('Express server listening on port' + app.get('port'));
});