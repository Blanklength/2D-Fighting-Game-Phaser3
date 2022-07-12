class FightScene extends Phaser.Scene {
  constructor() {
    super("FightScene");
  }

  preload() {}

  update_hp_shield_player1() {
    let { width, height } = this.sys.game.canvas;

    if (this.player2.is_blocking == false) {
      this.player2.hp_lose();
    } else {
      this.player2.shield_lose();
    }
    // knockbacking
    this.knockback_player_2();

    // creating new hp bar for player 2
    this.hpBar2.destroy(true, this);
    this.hpBar2 = this.create_bar(
      this.player2.hp,
      width - (width - width / 8),
      60,
      "hpBlock"
    );

    // creating new shield bar for player 2
    this.shieldBar2.destroy(true, this);
    this.shieldBar2 = this.create_bar(
      this.player2.shield,
      width - (width - width / 8),
      100,
      "shieldBlock"
    );
  }

  update_hp_shield_player2() {
    let { width, height } = this.sys.game.canvas;

    if (this.player1.is_blocking == false) {
      this.player1.hp_lose();
    } else {
      this.player1.shield_lose();
    }
    // knockbacking player 1
    this.knockback_player_1();

    // creating new hp bar
    this.hpBar1.destroy(true, this);
    this.hpBar1 = this.create_bar(
      this.player1.hp,
      width - width / 3,
      60,
      "hpBlock"
    );

    // creating new shield bar
    this.shieldBar1.destroy(true, this);
    this.shieldBar1 = this.create_bar(
      this.player1.shield,
      width - width / 3,
      100,
      "shieldBlock"
    );
  }

  create() {
    this.scene.launch("Stage1");

    let { width, height } = this.sys.game.canvas;

    // creating configs for text
    var textConfig = {
      fontSize: "60px",
      color: "#000000",
      fontFamily: "Arial",
    };

    //creating combo text
    this.combotext2 = this.add.text(0, 80, "", textConfig);
    this.combotext1 = this.add.text(width / 1.75, 80, "Blyat", textConfig);

    // invisible ground
    this.ground = this.physics.add.staticImage(width / 2, height / 2, "ground");
    this.ground.scaleX = 10;
    this.ground.scaleY = 0.1;
    this.ground.refreshBody();
    this.ground.setVisible(false);


    // players
    this.player1 = new Player(this, 800, 10, "blue");
    this.player2 = new Player2(this, 400, 10, "red");

    // hp bars
    this.hpBar1 = this.create_bar(
      this.player1.hp,
      width - width / 3,
      60,
      "hpBlock"
    );
    this.hpBar2 = this.create_bar(
      this.player2.hp,
      width - (width - width / 8),
      60,
      "hpBlock"
    );

    // shield bars
    this.shieldBar1 = this.create_bar(
      this.player1.shield,
      width - width / 3,
      100,
      "shieldBlock"
    );
    this.shieldBar2 = this.create_bar(
      this.player2.shield,
      width - (width - width / 8),
      100,
      "shieldBlock"
    );

    // collider

    this.physics.add.collider(this.player1, this.ground);
    this.physics.add.collider(this.player2, this.ground);
    this.collider_players = this.physics.add.collider(
      this.player1,
      this.player2
    );
  }

  create_bar(amount, x, y, block) {
    var hpGroup = this.add.group();
    for (let i = 0; i < amount; i++) {
      hpGroup.create(x, y, block);
      x += 10;
    }
    return hpGroup;
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
    if (this.player1.hp <= 0 || this.player2.hp <= 0) {
      this.physics.world.removeCollider(this.collider_players);
    }
  }

  update() {
    // destroy collider if someone is ko
    this.destroy_collider_players();

    // updating players
    this.player2.update();
    this.player1.update();
  }
}
