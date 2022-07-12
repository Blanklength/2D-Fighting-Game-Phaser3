var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var lobbyCode = undefined;
var entryCode = undefined;
var players_lobbys = new Map;
var lobbys = [];

function getLobbys(dict){
    var lobbys = [];
    for (const element of dict.entries()){
        lobbys.push(element[1])
    }

    return lobbys;
}
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
    // create Lobby
    socket.on("LobbyCode", (data)=>
    {
        lobbyCode = data;
        players_lobbys.set(socket.id, lobbyCode);
        lobbys = getLobbys(players_lobbys);
        socket.join(lobbyCode);
    });

    // join Lobby
    socket.on("joinLobby", (arg)=>{
        entryCode = arg;
        if (lobbys.includes(entryCode)){
            players_lobbys.set(socket.id, entryCode)
            socket.join(entryCode);
            io.to(entryCode).emit("succesfullEntry")
        }
        else{
            socket.emit("unsuccesfullEntry")
        }
    });


    // start Game event
    socket.on("startGame", () => {
        var lobby = players_lobbys.get(socket.id);
        io.to(lobby).emit("startGame");
    })

    // left, right, idle move
    socket.on("move", (move,  vel)=>{
        var lobby = players_lobbys.get(socket.id);
        io.to(lobby).emit(move, vel)
    })

    // atackmove
    socket.on("atackmove", (lobby, move, hp, block)=>{
        var impement = "Implement this stuff"
    })

});

server.listen(8081, function(){
    console.log("Server is running...")
})