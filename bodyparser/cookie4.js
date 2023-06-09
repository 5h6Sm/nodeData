var express = require('express');
var session = require('express-session');

var app = express();

app.use(session({
    secret : 'secret key',
    resave : false,
    saveUninitialized : true
}));

app.use(function (req, res){
    req.session.now = (new Date()).toUTCString();
    res.send(req.session);
});

app.listen(3000);