class CreateLobbyScene extends Phaser.Scene {
  constructor() {
    super("CreateLobbyScene");
    this.code = this.genenerateCode();
  }

  preload() {
    this.load.image("refresh", "assets/refresh.png");
  }

  genenerateCode() {
    var chars =
      "12345567890ABCCDEFGHHIJKLMNOPQRSTUFWXYZabcdefghijklmnopqrstuvwxyz";
    var code = "";
    for (var i = 0; i < 6; i++) {
      var random_num = Math.floor(Math.random() * chars.length);
      code += chars.charAt(random_num);
    }
    return code;
  }

  getCode() {
    return this.code;
  }

  createConnection() {
    this.client = io();
    this.client.on("connection");
  }

  create() {
    this.createConnection();
    this.client.emit("LobbyCode", this.code);
    let { width, height } = this.sys.game.canvas;
    var enterCode = this.add.text(
      width / 2 - 250,
      height / 2 - 200,
      "Lobby Code: " + this.code,
      { backgroundColor: "#0000000", color: "#FFFFFF", fontSize: 50 }
    );
    var refreshbutton = this.add
      .image(width / 2 + 350, height / 2 - 200, "refresh")
      .setScale(0.08);
    refreshbutton.setInteractive();
    var startGameButton = this.add.text(
      width / 2 - 250,
      height / 2 + 200,
      "Click here to start Game",
      { backgroundColor: "#0000000", color: "#FFFFFF", fontSize: 50 }
    );
    startGameButton.setInteractive();
    var playerstatus = this.add.text(
      width / 2 - 250,
      height / 2,
      "No Players",
      { backgroundColor: "#0000000", color: "#FFFFFF", fontSize: 50 }
    );
    startGameButton.setVisible(false);

    this.client.on("succesfullEntry", () => {
      playerstatus.setText("Other Player Joined");
    });

    refreshbutton.on("pointerdown", () => {
      this.code = this.genenerateCode();
      this.createConnection();
      this.client.emit("LobbyCode", this.code);
      enterCode.setText("Lobby Code: " + this.code);
    });

    this.client.on("succesfullEntry", () => {
      startGameButton.setVisible(true);
    });

    startGameButton.on("pointerdown", () => {
      // start multiplayer scene
      this.client.emit("startGame");
      this.scene.start("PreloadFightSceneOnline");
    });
  }

  update() {}
}
