// request 객체를 이용하여 매개변수를 추출하고
// 헤더의 속성을 추처하여 브라우저를 구분하여 페이지를 출력하는 예
const express = require('express');

var app = express();

app.use((req, res) => {
    // 변수를 선언합니다.
    var agent = req.header('User-Agent');
    var paramName = req.query.name;

    const browerChrome = 'Hello Chrome';
    const browserOthers = 'Hello Others';
    
    console.log(req.headers);
    console.log(req.baseUrl);
    console.log(req.hostname);
    console.log(req.protocol);

    if(agent.toLowerCase().match(/chrome/)){
        res.write(`<div><p>${browerChrome}</p></div>`);
    }else{
        res.write(`<div><p>${browserOthers}</p></div>`);
    }
    res.write(`<div><p>${agent}</p></div>`);
    res.write(`<div><p>${paramName}</p></div>`);
    res.end();
});

// 서버를 실행합니다
app.listen(3000, function(){
    console.log('Server running ar http://127.0.0.1:3000');
})