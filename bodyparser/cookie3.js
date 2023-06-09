var express = require('express');
var session = require('express-session');

var app = express();

app.use(session({
    secret : 'secret key',
    resave : false,
    saveUninitialized : true
}));
app.use(function(requrest, response){});

app.listen(3000, function(){
    console.log('Server running at http://127.0.0.1:3000');
});