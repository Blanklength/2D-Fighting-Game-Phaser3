class Stage1 extends Phaser.Scene {
    constructor() {
      super("Stage1");
    }
  
    preload() {}
  
    create() {
      var box_ground = this.add.rectangle(200, 200, 600, 600, 0x000000)
    }
  
    update() {}
  }
  