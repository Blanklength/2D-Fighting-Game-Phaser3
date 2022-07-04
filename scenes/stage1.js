class Stage1 extends Phaser.Scene {
  constructor() {
    super("Stage1");
  }

  preload() {
    this.load.image("ring_block", "assets/better_block.png")
    this.load.image("ring_line", "assets/line.png")
  }

  create() {
    let { width, height } = this.sys.game.canvas;
    var group = this.physics.add.staticGroup()
    group.create(100, height/2, "ring_block")
    group.create(width/1.045, height/2, "ring_block")
    //this.add.image(width/2, height/2-40, "ring_line").setScale(5.5);
    var box_ground = this.add.rectangle(width/2, height, width, height, 0x000000);
    
  }

  update() {}
}


