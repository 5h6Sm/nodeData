// 프로세스 객체
console.log('argv 속성의 파라미터 수 : ' + process.argv.length);
console.log(process.argv);

process.argv.forEach(function(item, index){
    console.log(index + ' : ', item);
})
// main(argc, argv);

console.dir(process.env);
console.log('os 환경변수의 값 : ' + process.env['os']);