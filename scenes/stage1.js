class Stage1 extends Phaser.Scene {
  constructor() {
    super("Stage1");
  }

  preload() {
    this.load.image("ring_block", "assets/better_block.png");
    this.load.image("ring_line", "assets/better_better_line.png");
  }

  create() {
    let { width, height } = this.sys.game.canvas;

    this.group = this.physics.add.group();
    this.border1 = this.group
      .create(100, height / 2, "ring_block")
      .setSize(65, 200);
    this.border2 = this.group
      .create(width / 1.045, height / 2, "ring_block")
      .setSize(65, 200);

    this.fightScene = this.game.scene.getScene("FightScene");

    this.fightScene.physics.add.existing(this.border1);
    this.fightScene.physics.add.existing(this.border2);

    this.border1.body.setImmovable(true);
    this.border2.body.setImmovable(true);

    this.fightScene.physics.add.collider(this.fightScene.player1, this.border2);
    this.fightScene.physics.add.collider(this.fightScene.player2, this.border2);

    this.fightScene.physics.add.collider(this.fightScene.player1, this.border1);
    this.fightScene.physics.add.collider(this.fightScene.player2, this.border1);

    var box_ground = this.add.rectangle(
      width / 2,
      height,
      width / 1.10125,
      height,
      0x000000
    );

    this.add.image(width / 2 + 35, height / 1.5, "ring_line").setScale(5.46);
  }

  update() {}
}
