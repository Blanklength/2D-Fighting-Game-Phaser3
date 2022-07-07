const { testFunktion } = require("../js/client");

class TitleScreen extends Phaser.Scene {
  constructor() {
    super("TitleScreen");
    this.cursor = 0;
  }

  preload() {
    this.load.image("start", "assets/better_start_btn.png");
    this.load.image("start_sel", "assets/start_selected.png");
    this.load.image("create_lob", "assets/create_lobby_image.png");
    this.load.image("title", "assets/title_text.png");
    this.load.image("select_block", "assets/select_block.png");
    this.load.image("bg", "assets/fazli_bey.png")
    this.load.image("join_lob", "assets/join_lobby_image.png")
  }

  create() {
    let { width, height } = this.sys.game.canvas;
    this.add.image(width/2, height/2, "bg").setScale(2).setDepth(-1)
    this.start = this.add.image(width / 2, height / 2, "start");
    this.create = this.add.image(width / 2, height / 2 + 20, "create_lob");
    this.join = this.add.image(width / 2, height / 2 + 85, "join_lob");
    this.add.image(width / 2 - 20, height / 2 - 20, "title");
    this.my_marker = this.add.sprite(
      width / 2 - 5,
      height / 2 + 10,
      "select_block"
    );
    this.cursor_in = this.input.keyboard.createCursorKeys();

  }

  up_cursor() {
    let { width, height } = this.sys.game.canvas;
    if (this.cursor > 0) this.cursor--;
    if (this.cursor == 0) {
      this.my_marker.setPosition(this.start.x-5, this.start.y+10);
    }
    else if (this.cursor == 1) {
      this.my_marker.setPosition(this.create.x-5, this.create.y+60);
    }
  }

  down_cursor() {
    let { width, height } = this.sys.game.canvas;
    if (this.cursor < 2) this.cursor++;
    if (this.cursor == 1) {
      this.my_marker.setPosition(this.create.x-5, this.create.y+60);
    }
    else if (this.cursor == 2) {
      this.my_marker.setPosition(this.join.x-5, this.join.y+60);
    }
    console.log(this.cursor)

  }

  update() {
    // key objects
    let keyobj_up = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.UP
    );
    let keyobj_down = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.DOWN
    );

    let keyobj_enter = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.ENTER
    );

    // checking for press and calculating cursor
    if (Phaser.Input.Keyboard.JustDown(this.cursor_in.up)) {
      this.up_cursor();
    }

    if (Phaser.Input.Keyboard.JustDown(this.cursor_in.down)) {
      this.down_cursor();
    }

    // changing scenes here
    if (keyobj_enter.isDown) {
      // 0 is for game Scene
      if (this.cursor == 0) {
        this.scene.start("PreloadFightScene");
      }
      // 1 is for Settingscene
      if (this.cursor == 1) {
        this.scene.start("CreateLobbyScene");
      }
      if (this.cursor == 2) {
        this.scene.start("JoinLobbyScene");
      }



      // implemen Multiplayer Scene
    }
  }
}
