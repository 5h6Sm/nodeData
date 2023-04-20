const http = require('http');
const fs = require('fs');
const path = require('path');
const querystring = require('querystring');
const port = 3000;

let movieList = [{
    title : '스타워즈4',
    director : '조지루카스'
}]

for(let i = 0; i<movieList.length; i++){
    console.log(movieList[i].title + "\n" + movieList[i].director);
}

// btn.addEventListener("click", function(movieTitle, movieDirector){
//     movieList.title.push(movieTitle);
//     movieList.director.push(movieDirector);
// });

const server = http.createServer(function(req, res){

    // if (req.url === '/main.html') {
    //     const filePath = path.join(__dirname, 'public', 'index.html');
    //     fs.readFile(filePath, 'utf8', (err, html) => {
    //       if (err) {
    //         res.writeHead(500);
    //         res.end(`Error loading HTML file: ${err}`);
    //       } else {
    //         res.writeHead(200, { 'Content-Type': 'text/html' });
    //         res.end(html);
    //       }
    //     });
    //   } else {
    //     res.writeHead(404);
    //     res.end('Not found');
    //   }

    const method = req.method;

    if(method === 'POST'){ //post방식이면
        addNewMoie(req, res);
    }
    //get이면 목록출력
    else{
        showList(req, res);
    }
});

server.listen(port, () => { //서버연결
    console.log(`server on : ${port} port`);
});

function showList(req, res){
    res.writeHead(200, {'Content-Type':'text/html;charset=UTF-8'});
    res.write('<html>');
    res.write('<meta charset = "UTF-8>');
    res.write('<body>');
    res.write('<h3>Favorit movie</h3>');
    res.write('<div><ul>');
    // var ul = document.getElementsByClassName('movie_title_list');
    
     // 영화 목록을 HTML 리스트로 출력하는 코드
    // for (let i = 0; i < movieList.length; i++) {
    //     const movie = movieList[i];
    //     // console.log(movie.title, movie.director);
    //     res.write(`<li>${movie.title} (${movie.director})</li>`);
    // }
    movieList.forEach(function (item){
        res.write('<li>' + item.title + '(' + item.director + ')</li>');
    }, this);
    res.write('</ul></div>');

    res.write(
        '<form method="post" action = "."><h4>새 영화 입력</h4>'
    )
    
    res.end();
}
    
function addNewMoie(req, res){
    let body = '';
  
    req.on('data', function(chunk) {
      body += chunk;
    });
    
    // req.on('end', function() {
    //   const newMovie = querystring.parse(body);
    //   movieList.push(newMovie);
      
    //   // 새로운 영화 추가 후에는 영화 목록 페이지로 리다이렉트합니다.
    //   res.writeHead(302, { 'Location': '/' });
    //   res.end();
    // });


}
    
    