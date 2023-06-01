const mysql = require('mysql');
const connetion= mysql.createConnection({
    host : 'localhost',
    port : 3306,
    user : 'kim',
    password : 'kim',
    database : 'mydb'
});


connetion.connect(function(err){
    if(err){
        console.log('mysql connetion error');
        console.error(err);
        throw err;
    }else{
        console.log("연결에 성공하였습니다.");
    }
});

// 2) users 테이블의 테이더 출력
connetion.connect();
connetion.query('SELECT * FROM USERS', 
    (error, rows, fields) =>{
    if(error) throw error;
    console.log('USERS info : ', rows);
});
connetion.end();