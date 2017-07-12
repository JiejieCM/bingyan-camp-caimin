/**
 * Created by cm on 2017/7/12.
 */
var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
    // res.send('Hello World!');
    res.sendfile(__dirname + '/public/movie.html');});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
})