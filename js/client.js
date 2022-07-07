var client = {};
client.socket = io.connect();

client.askNewPlayer = function(){
    client.socket.emit("newplayer")
};

export function testFunktion(){
    console.log("ICH LEBEEE");
}