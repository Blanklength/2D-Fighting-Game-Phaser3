var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var lobbyCode = undefined;
var entryCode = undefined;

// usages
app.use('/objects',express.static(__dirname + '/objects'));
app.use('/scenes',express.static(__dirname + '/scenes'));
app.use('/js',express.static(__dirname + '/js'));
app.use('/assets',express.static(__dirname + '/assets'));

// get index html file
app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
})

io.on("connection", (socket) => {
    socket.on("LobbyCode", (data)=>
    {
        lobbyCode = data;
        socket.join(lobbyCode);
    });

    socket.on("joinLobby", (arg)=>{
        entryCode = arg;
        if (entryCode == lobbyCode){
            socket.join(entryCode);
            io.to(lobbyCode).emit("succesfullEntry")
        }
        else{
            socket.emit("unsuccesfullEntry")
        }
    });

    socket.on("startGame", (lobby) => {
        console.log(lobby);
        io.to(lobby).emit("startGame");
    })

    socket.on("moveRight", (lobby, vel)=>{
        io.to(lobby).emit("moveRight", vel)
    })


});

server.listen(8081, function(){
    console.log("Server is running...")
})