class CreateLobbyScene extends Phaser.Scene {
  constructor() {
    super("CreateLobbyScene");
  }

  preload() {
    this.load.image("refresh", "assets/refresh.png")
  }

  genenerateCode(){
    var chars = "12345567890ABCCDEFGHHIJKLMNOPQRSTUFWXYZabcdefghijklmnopqrstuvwxyz"
    var code = ""
    for(var i = 0; i < 6; i++){
      var random_num = Math.floor(Math.random() * chars.length); 
      code+=chars.charAt(random_num)
    }
    return code;
  }

  create() {
    let { width, height } = this.sys.game.canvas;
    var enterCode = this.add.text(width/2-250, height/2-200, "Lobby Code: " + this.genenerateCode(), {backgroundColor: "#0000000", color: '#FFFFFF', fontSize: 50})
    var refreshbutton = this.add.image(width/2+350, height/2-200, "refresh").setScale(0.08)
    refreshbutton.setInteractive()
    this.add.text(width/2-250, height/2-100, "Players Joined:", {backgroundColor: "#0000000", color: '#FFFFFF', fontSize: 50})

    refreshbutton.on('pointerdown', () => { enterCode.setText("Lobby Code: " + this.genenerateCode()) })

  }

  update() {}
}
