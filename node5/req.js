const request = require('request');

const url = 'http://hanbit.co.kr/store/books/new_book_list.html';
request(url, (error, response, body)=>{
    console.log(body);
})