var client = io();
client.on("connection");


function getInsertedCode() {
  return document.getElementById("code_entry").value;
}

function connectToLobby() {
  lobby_code = getInsertedCode();
  client.emit("joinLobby", lobby_code);
}

class JoinLobbyScene extends Phaser.Scene {
  constructor() {
    super("JoinLobbyScene");
  }

  preload() {}

  getInsertedCode() {}

  create() {
    // center code input
    var code_input = document.getElementById("code_entry");
    code_input.style.visibility = "visible";
    code_input.style.top = "50%";
    code_input.style.left = "45%";

    // set position of button
    var sendCodeBtn = document.getElementById("sendCodeBtn");
    sendCodeBtn.style.top = "60%";
    sendCodeBtn.style.left = "45%";
    sendCodeBtn.style.visibility = "visible";

    client.on("unsuccesfullEntry", () => {
      window.alert("No Lobby Found");
    });

    client.on("succesfullEntry", () => {
      let { width, height } = this.sys.game.canvas;
      this.add.text(width / 2 - 480, 10, "Host needs to start the Game...", {
        backgroundColor: "#0000000",
        color: "#FFFFFF",
        fontSize: 50,
      });
    });

    client.on("startGame", () => {
      code_input.style.visibility = "hidden";
      sendCodeBtn.style.visibility = "hidden";
      this.scene.start("PreloadFightSceneOnline", client);
    });
  }

  update() {}
}

