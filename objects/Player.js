class Player extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, color) {
    super(scene, x, y, color);

    this.scene.physics.world.enable(this);
    this.scene.add.existing(this);

    this.setPosition(x, y);
    this.aura = this.scene.add.sprite(this.body.x, this.body.y, "hp_block")

    this.setTexture("idle0");
    this.play("idle");

    this.body // player Config
      .setBounce(0.5);
    this.body.setSize(200, 300, true);
    this.body.setGravityY(100);
    this.body.setCollideWorldBounds(true);
    this.body.setOffset(80, 87);

    //Methoden Aufrufe für Erstellung
    this.init();
    this.create();
  }

  init() {
    this.width = this.scene.sys.game.canvas.width;
    this.height = this.scene.sys.game.canvas.height;

    //Variables
    this.ko_animation_played = false;
    this.atack_started = false;
    this.is_blocking = false;
    this.is_in_knockback = false;
    this.current_knockback_speed = 0;
    this.is_hp_losing = false;

    this.hp = 50;
    this.shield = 5;
    this.colliderPunch;
  }

  create() {
    // Controls
    // this.cursors = this.scene.input.keyboard.createCursorKeys() //For the Arrow Keys
    //Letter Keys
    this.wasd = this.scene.input.keyboard.addKeys({
      up: Phaser.Input.Keyboard.KeyCodes.W,
      left: Phaser.Input.Keyboard.KeyCodes.A,
      right: Phaser.Input.Keyboard.KeyCodes.D,
      down: Phaser.Input.Keyboard.KeyCodes.S,
      up_space: Phaser.Input.Keyboard.KeyCodes.SPACE,
      e: Phaser.Input.Keyboard.KeyCodes.E,
      q: Phaser.Input.Keyboard.KeyCodes.Q,
      esc: Phaser.Input.Keyboard.KeyCodes.ESC,
      shift: Phaser.Input.Keyboard.KeyCodes.SHIFT,
    });
    this.cursors = this.scene.input.keyboard.createCursorKeys();

    // Look in this function, after one animation is completed
    this.on("animationcomplete", (event) => {
      try {
        if (
          event.key == "punchright" ||
          event.key == "punchleft" ||
          event.key == "uppercut" ||
          event.key == "hurt"
        ) {
          this.anims.play("idle", true);
          this.colliderPunch.destroy(true);
        }
      } catch (e) {}

      this.is_blocking = false;
    });

    // key objects
    this.keyobj_j = this.scene.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.J
    );

    this.keyobj_k = this.scene.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.K
    );

    this.keyobj_l = this.scene.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.L
    );

    this.keyobj_h = this.scene.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.H
    );
  }

  update() {
    this.aura.destroy(true, this)
    this.aura = this.scene.add.sprite(this.body.x+100, this.body.y+150, "hp_block").setDepth(-1)
    this.aura.anims.play("ssj", true)
    this.flipX = true;
    // going right
    if (this.hp > 0) {
      if (this.cursors.right.isDown) {
        if (
          !this.checkIfAnimationIsPlaying("punchright") &&
          !this.checkIfAnimationIsPlaying("punchleft") &&
          !this.checkIfAnimationIsPlaying("uppercut") &&
          !this.checkIfAnimationIsPlaying("block")
        ) {
          this.body.setVelocityX(60);
          if (!this.checkIfAnimationIsPlaying("hurt"))
            this.anims.play("walkback", true);
        }
      }
      // going left
      else if (this.cursors.left.isDown) {
        if (
          !this.checkIfAnimationIsPlaying("punchright") &&
          !this.checkIfAnimationIsPlaying("punchleft") &&
          !this.checkIfAnimationIsPlaying("uppercut") &&
          !this.checkIfAnimationIsPlaying("block")
        ) {
          this.body.setVelocityX(-60);
          if (!this.checkIfAnimationIsPlaying("hurt"))
            this.anims.play("walk", true);
        }
      }
      //idle
      else {
        if (
          !this.checkIfAnimationIsPlaying("punchright") &&
          !this.checkIfAnimationIsPlaying("punchleft") &&
          !this.checkIfAnimationIsPlaying("uppercut")
        ) {
          this.body.setVelocityX(0);
          if (!this.checkIfAnimationIsPlaying("hurt"))
            this.anims.play("idle", true);
          //this.anims.play("ssj_transform")
          this.scene.combotext1.setText("");
        }
      }
      if (this.is_in_knockback) {
        if (this.current_knockback_speed <= 0) {
          this.is_in_knockback = false;
        }
        this.body.setVelocityX(
          this.body.velocity.x + this.current_knockback_speed
        );
        this.current_knockback_speed -= 5;
      }
      if (this.is_hp_losing) {
        this.anims.play("hurt");
      }
      this.on(
        Phaser.Animations.Events.ANIMATION_COMPLETE,
        this.reset_hurt,
        this
      );
      this.is_hp_losing = false;

      if (Phaser.Input.Keyboard.JustDown(this.keyobj_j)) {
        this.atack_started = true;
        this.scene.combotext1.setText("1 x Punch Right!!!");
        this.attackanimation("punchright");
      } else if (Phaser.Input.Keyboard.JustDown(this.keyobj_k)) {
        this.atack_started = true;
        this.scene.combotext1.setText("1 x Punch Left!!!");
        this.attackanimation("punchleft");
      }
      if (Phaser.Input.Keyboard.JustDown(this.keyobj_l)) {
        if (!this.checkIfAnimationIsPlaying("punchright"))
          this.atack_started = true;
        this.scene.combotext1.setText("1 x Uppercut!!!");
        this.attackanimation("uppercut");
      }
      this.is_blocking = false;
      if (this.keyobj_h.isDown && this.shield != 0) {
        this.is_blocking = true;
        this.blockAnimation("block");
        this.scene.combotext1.setText("Blooockkk!!!");
      }
    } else {
      if (this.ko_animation_played == false) {
        this.ko_animation_played = true;
        this.anims.play("ko", true);
        this.scene.combotext1.setText("KOOOOOO!!!!!");
        this.body.setVelocityX(0);
        this.body.setBounce(0);
      }
    }
  }

  checkIfAnimationIsPlaying(animation) {
    return this.anims.currentAnim.key == animation;
  }

  blockAnimation(anim) {
    this.body.setVelocityX(0);
    this.anims.play(anim, true);
  }

  attackanimation(attackType) {
    this.body.setVelocityX(0);

    this.hitbox = this.scene.add
      .sprite(this.x, this.y - this.body.height / 2)
      .setDepth(-1)
      .setScale(0.2)
      .setAngle(this.flipX ? 45 : -45);

    this.hitbox.once("animationcomplete", () => {
      this.hitbox.destroy();
    });

    this.anims.play(attackType, true);

    this.attackCalulation();
  }

  attackCalulation() {
    // calcutating hitbox by atack
    // var animation_progress = this.player1.anims.getProgress();
    this.colliderPunch = this.scene.add.rectangle(
      this.x - 192,
      this.y + 70,
      80,
      80
    );

    this.scene.physics.add.existing(this.colliderPunch);
    this.colliderPunch.body.setImmovable(true);

    this.colliderPunch.setVisible(false);

    if (this.scene.physics.overlap(this.scene.player2, this.colliderPunch)) {
      this.scene.update_hp_shield_player1();

      if (this.colliderPunch) this.colliderPunch.destroy();
    }
  }

  reset_hurt() {
    this.is_hp_losing = false;
  }

  hp_lose() {
    this.hp -= 1;
    this.is_hp_losing = true;
    //this.anims.play("hurt", true)
  }

  shield_lose() {
    if (this.shield > 0) {
      this.shield -= 1;
    }
  }
}
