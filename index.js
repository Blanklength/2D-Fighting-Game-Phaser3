var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

// usages
app.use('/objects',express.static(__dirname + '/objects'));
app.use('/scenes',express.static(__dirname + '/scenes'));
app.use('/js',express.static(__dirname + '/js'));
app.use('/assets',express.static(__dirname + '/assets'));


app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
})

server.listen(8081, function(){
    console.log("")
})