class TitleScreen extends Phaser.Scene {
  constructor() {
    super("TitleScreen");
    this.cursor = 0;
  }

  preload() {
    this.load.image("start", "assets/better_start_btn.png");
    this.load.image("start_sel", "assets/start_selected.png");
    this.load.image("settings", "assets/better_settings_btn .png");
    this.load.image("title", "assets/title_text.png");
    this.load.image("select_block", "assets/select_block.png");
  }

  create() {
    let { width, height } = this.sys.game.canvas;
    this.add.image(width / 2, height / 2, "start");
    this.add.image(width / 2, height / 2 + 80, "settings");
    this.add.image(width / 2 - 20, height / 2 - 20, "title");
    this.my_marker = this.add.sprite(
      width / 2 - 5,
      height / 2 + 10,
      "select_block"
    );
  }

  up_cursor() {
    if (this.cursor < 1) this.cursor++;
  }

  down_cursor() {
    if (this.cursor > 0) this.cursor--;
  }

  update() {
    // key objects
    let keyobj_up = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.UP
    );
    let keyobj_down = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.DOWN
    );

    // checking for press and calculating cursor
    if (keyobj_up.isDown) {
      this.up_cursor();
      window.alert(this.cursor);
    }

    if (keyobj_down.isDown) {
      this.down_cursor();
      window.alert(this.cursor);
    }
  }
}
