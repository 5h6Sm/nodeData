let fs = require('fs');

let data = fs.readFileSync('./package.json', 'utf8', function(err, data){
    console.log(data);
});
console.log('프로젝트 폴더 안의 package.json 파일을 읽도록 했습닌다.');