class FightScene extends Phaser.Scene {
  constructor() {
    super("FightScene");
    this.hp = 100;

    console.log("TEST");
  }

  preload() {}

  create() {
    let { width, height } = this.sys.game.canvas;
    this.ground = this.physics.add.staticImage(width / 2, height / 2, "ground");
    this.ground.scaleX = 10;
    this.ground.scaleY = 0.1;
    this.ground.refreshBody();

    this.player1 = new Player(this, 400, 10, "red");
    this.player2 = new Player(this, 800, 10, "blue");

    // collider
    this.physics.add.collider(this.player1, this.ground);
    this.physics.add.collider(this.player2, this.ground);
  }

  update() {
    this.player1.update();
    this.player2.update();
  }
}
