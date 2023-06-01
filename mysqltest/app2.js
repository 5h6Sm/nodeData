const mysql = require('mysql');
const { del } = require('request');
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'kim',
  password: 'kim',
  database: 'mydb'
});

connection.connect((err) => {
  if (err) {
    console.error('MySQL connection error');
    console.error(err);
    throw err;
  }
  console.log('연결에 성공하였습니다.');

//   // testtable 삽입
//   var sql2 = "insert into testtable values(?, ?)";

//   var input_data1 = [3, "lim"];
//   connection.query(sql2, input_data1, function(err){
//     console.log("삽입완료1");
//   });

//   var input_data1 = [4, "park"];
//   connection.query(sql2, input_data1, function(err){
//     console.log("삽입완료2");
//   });


//   var input_data1 = [5, "choi"];
//   connection.query(sql2, input_data1, function(err){
//     console.log("삽입완료3");
//   });

//) testtable 수정
  var sql = "update TestTable set str_name=? where no=?";
  var update_date = ["김길동", 1];
  connection.query(sql, update_date, function(error){
    console.log("수정완료");
  })

  //) testtable 삭제

  var sql4 = "delete from testtable where no = ?";
  var delete_data = [5];
  connection.query(sql4, delete_data, function(error){
    console.log("삭제완료");
  })


  // testtable 출력
  var sql1 = 'SELECT no, str_name FROM testtable';
  connection.query(sql1, (err, rows) => {
    if (err) {
      console.error('MySQL query error');
      console.error(err);
      throw err;
    }
    for (var obj of rows) {
      console.log('no : ', obj.no);
      console.log('name : ', obj.str_name);
    }
  });

  connection.end();
});
