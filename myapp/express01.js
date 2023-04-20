const express = require('express')
const app = express()

// app.use('/test', handler)
// /test으로 시작하는 모든 요청에 응답, 모든 method에 응담

// app.get('/test')
// /test 정확한 URL과 GET method에만 응담

app.use(function (req, res) {
  res.writeHead(200, {'Content-Type' : 'text/html'});
  res.end('<h1>Hello express</h1>');
});

app.listen(3000, () => {
  console.log("Server Running at http://127.0.0.1:3000");
})