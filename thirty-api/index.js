var express = require('express');
var app = express();

app.listen(3000, function() {
    console.log('server ready!')
});

app.get('/teste', function(request, response) {
    console.log('REQUESTED');
    response.send('200 - OK!');
})