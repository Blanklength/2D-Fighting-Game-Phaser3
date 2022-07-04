class FightScene extends Phaser.Scene {
  constructor() {
    super("FightScene");
  }

  preload() {}

  update_hp() {
    let { width, height } = this.sys.game.canvas;
    if (this.player1.atack_started) {
      if (this.physics.overlap(this.player1, this.player2)) {
        if (this.player2.is_blocking == false){
          this.player2.hp_lose();
        }

        this.knockback_player_2();
        this.hpBar2.destroy(true, this);
        this.hpBar2 = this.create_hpBar(
          this.player2,
          width - (width - width / 8),
          60
        );
      }
    }

    if (this.player2.atack_started) {
      if (this.physics.overlap(this.player1, this.player2)) {
        if (this.player1.is_blocking == false){
          this.player1.hp_lose();
        }
        this.knockback_player_1();
        this.hpBar1.destroy(true, this);
        this.hpBar1 = this.create_hpBar(this.player1, width - width / 3, 60);
      }
    }
  }

  create() {
    this.scene.launch("Stage1");

    let { width, height } = this.sys.game.canvas;

    // creating configs for text
    var textConfig={fontSize:'60px',color:'#000000',fontFamily: 'Arial'};

    //creating combo text
    this.combotext2 = this.add.text(0, 80, "", textConfig)
    this.combotext1 = this.add.text(width/1.75, 80, "Blyat", textConfig)
  
    this.ground = this.physics.add.staticImage(width / 2, height / 2, "ground");
    this.ground.scaleX = 10;
    this.ground.scaleY = 0.1;
    this.ground.refreshBody();

    this.player1 = new Player(this, 800, 10, "blue");
    this.player2 = new Player2(this, 400, 10, "red");
    this.hpBar1 = this.create_hpBar(this.player1, width - width / 3, 60);
    this.hpBar2 = this.create_hpBar(
      this.player2,
      width - (width - width / 8),
      60
    );

    // collider
    this.physics.add.collider(this.player1, this.ground);
    this.physics.add.collider(this.player2, this.ground);
    this.collider_players = this.physics.add.collider(this.player1, this.player2);
  }

  create_hpBar(player, x, y) {
    var hpGroup = this.add.group();
    for (let i = 0; i < player.hp; i++) {
      hpGroup.create(x, y, "hpBlock");
      x += 10;
    }
    return hpGroup;
  }

  changeHitBoxesByAtack() {
    this.atackmove_p1 =
      this.player1.anims.currentAnim.key != "idle" &&
      this.player1.anims.currentAnim.key != "walk" &&
      this.player1.anims.currentAnim.key != "walkback";
    this.atackmove_p2 =
      this.player2.anims.currentAnim.key != "idleBlue" &&
      this.player2.anims.currentAnim.key != "walkBlue" &&
      this.player2.anims.currentAnim.key != "walkbackBlue";

    // calcutating hitbox by atack
    if (this.atackmove_p1) {
      var animation_progress = this.player1.anims.getProgress();
      this.player1.body.setSize(
        300 + -720 * Math.pow(animation_progress, 2) + 720 * animation_progress,
        300
      ).refreshBody;
      this.player2.refreshBody;
    }

    if (this.atackmove_p2) {
      var animation_progress_2 = this.player2.anims.getProgress();
      this.player2.body.setSize(
        300 +
          -720 * Math.pow(animation_progress_2, 2) +
          720 * animation_progress_2,
        300
      ).refreshBody;
      this.player1.refreshBody;
    }
  }

  knockback_player_2() {
    this.player2.is_in_knockback = true;
    this.player2.current_knockback_speed = 200;
    this.player1.atack_started = false;
  }

  knockback_player_1() {
    this.player1.is_in_knockback = true;
    this.player1.current_knockback_speed = 200;
    this.player2.atack_started = false;
  }

  destroy_collider_players() {
    if (this.player1.hp == 0 || this.player2.hp == 0) {
      this.physics.world.removeCollider(this.collider_players);
    }
  }

  update() {
    // changing hitbox if a move is done
    this.changeHitBoxesByAtack();

    // updating hp's
    this.update_hp();

    // destroy collider if someone is ko
    this.destroy_collider_players();

    // updating players
    this.player2.update();
    this.player1.update();
  }
}
