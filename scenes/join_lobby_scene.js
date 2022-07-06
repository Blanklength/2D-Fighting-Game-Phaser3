class JoinLobbyScene extends Phaser.Scene {
    constructor() {
      super("JoinLobbyScene");
    }
  
    preload() {}
  
    create() {
      this.add.text(200, 200, "Join loobby blyat")
      var code_input = document.getElementById("code_entry")
      code_input.style.visibility = "visible";
      code_input.style.top = "50%";
      code_input.style.left = "45%";


    }
  
    update() {}
  }
  