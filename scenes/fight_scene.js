class FightScene extends Phaser.Scene {
  constructor() {
    super("FightScene");
  }

  preload() {}

  create() {
    let { width, height } = this.sys.game.canvas;
    this.ground = this.physics.add.staticImage(width / 2, height / 2, "ground");
    this.ground.scaleX = 10;
    this.ground.scaleY = 0.1;
    this.ground.refreshBody();

    this.player1 = new Player(this, 400, 10, "red");
    this.player2 = new Player2(this, 800, 10, "blue");

    this.hpBar1 = this.create_hpBar(this.player1, width - (width-width/8), 60);
    this.hpBar2 = this.create_hpBar(this.player1, width-width/3, 60);


    // collider
    this.physics.add.collider(this.player1, this.ground);
    this.physics.add.collider(this.player2, this.ground);
    this.physics.add.collider(this.player1, this.player2);
  }

  create_hpBar(player, x, y){
    var hpGroup = this.add.group()
    for (let i = 0; i < player.hp; i++){
      hpGroup.create(x, y, "hpBlock");
      x+=10;
    }
    return hpGroup
  }

  update() {
    this.player2.update();
    this.player1.update();


    // calcutating hitbox by atack
    if (this.player1.anims.currentAnim.key != "idle" && this.player1.anims.currentAnim.key != "walk" && this.player1.anims.currentAnim.key != "walkback"){
      var animation_progress = this.player1.anims.getProgress();
      this.player1.body.setSize(300+-720*Math.pow(animation_progress, 2)+720*animation_progress, 300).refreshBody
    }

    if (this.player2.anims.currentAnim.key != "idleBlue" && this.player2.anims.currentAnim.key != "walkBlue" && this.player2.anims.currentAnim.key != "walkbackBlue"){
      var animation_progress_2 = this.player2.anims.getProgress();
      this.player2.body.setSize(300+-720*Math.pow(animation_progress_2, 2)+720*animation_progress, 300).refreshBody
    }
  }
}
