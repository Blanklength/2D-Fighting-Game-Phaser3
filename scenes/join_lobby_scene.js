class JoinLobbyScene extends Phaser.Scene {
    constructor() {
      super("JoinLobbyScene");
    }
  
    preload() {}
  
    create() {
      // center code input
      var code_input = document.getElementById("code_entry")
      code_input.style.visibility = "visible";
      code_input.style.top = "50%";
      code_input.style.left = "45%";

      // set position of button
      var sendCodeBtn = document.getElementById("sendCodeBtn");
      sendCodeBtn.style.top = "60%";
      sendCodeBtn.style.left = "45%";
      sendCodeBtn.style.visibility = "visible";


    }
  
    update() {}
  }
  