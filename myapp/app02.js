var express = require('express');

var appp = express();

appp.use(function (req, res){
    var output = [];
    for(var i = 0; i<3; i++){
        output.push({
            count: i,
            name : 'name - ' + i
        });
    }
    res.send(output);
});

appp.listen(52273, function(){
    console.log('Server running at http://127.0.0.1:52273');
});