let fs = require('fs');
let http = require('http');

//서버 생성 후 실행
http.createServer(function (request, response) {
  //HTML 파일을 읽음
//   fs.readFile('HTMLPage.html', function(error, data) {
//     response.writeHead(200, {'Content-Type': 'text/html'});
//     response.end(data);
//   });

    fs.readFile('sample.jpg', function(error, data){
        response.writeHead(200, {'Content-Type':'image/jpeg'});
        response.end(data);
    });
}).listen(5227, function() {
  console.log('Server Running at http://127.0.0.1:5227');
});     