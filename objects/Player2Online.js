
function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

//delay(1000).then(() => console.log('ran after 1 second1 passed'));


class Player2Online extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, color) {
    super(scene, x, y, color);

    this.scene.physics.world.enable(this);
    this.scene.add.existing(this);

    this.setPosition(x, y);

    this.setTexture("idle0Blue");
    this.play("idleBlue");

    this.aura = this.scene.add.sprite(this.body.x, this.body.y, "hp_block")


    this.body.setBounce(0.5);
    this.body.setSize(200, 300, true);
    this.body.setGravityY(100);
    this.body.setOffset(220, 87);
    this.body.setCollideWorldBounds(true);

    //Methoden Aufrufe für Erstellung
    this.init();
    this.create();

    //Offset Body -----------------
    //body.setOffset(x, y);
  }

  init(enemies, data) {
    this.width = this.scene.sys.game.canvas.width;
    this.height = this.scene.sys.game.canvas.height;
 
    this.atack_started = false;
    this.ko_animation_played = false;
    this.is_blocking = false;
    this.is_in_knockback = false;
    this.current_knockback_speed = 0;
    this.is_hp_losing = false;

    this.hp = 50;
    this.shield = 5;
    this.colliderPunch;
    this.is_ssj = false;
  }

  create() {
    this.cursors = this.scene.input.keyboard.createCursorKeys();

    // Look in this function, after one animation is completed
    this.on("animationcomplete", (event) => {
      try {
        if (
          event.key == "punchrightBlue" ||
          event.key == "punchleftBlue" ||
          event.key == "uppercutBlue" ||
          event.key == "hurtBlue"
        ) {
          this.anims.play("idleBlue", true);
          this.colliderPunch.destroy(true);
        }

        this.is_blocking = false;
      } catch (e) {}
    });

    // key objects
    this.keyobj_a = this.scene.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.A
    );

    this.keyobj_d = this.scene.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.D
    );

    this.keyobj_c = this.scene.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.C
    );

    this.keyobj_v = this.scene.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.V
    );

    this.keyobj_b = this.scene.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.B
    );

    this.keyobj_x = this.scene.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.X
    );

    this.keyobj_t = this.scene.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.T
    );
  }

  update() {
    // going right
    this.aura.setPosition(this.body.x+100, this.body.y+150).setDepth(-1);
    if (this.hp > 0) {
      if (this.keyobj_d.isDown) {
        if (
          !this.checkIfAnimationIsPlaying("punchrightBlue") &&
          !this.checkIfAnimationIsPlaying("punchleftBlue") &&
          !this.checkIfAnimationIsPlaying("uppercutBlue") &&
          !this.checkIfAnimationIsPlaying("blockBlue")
        ) {
          this.body.setVelocityX(60);
          if (!this.checkIfAnimationIsPlaying("hurtBlue"))
            this.anims.play("walkBlue", true);
        }
      }
      // going left
      else if (this.keyobj_a.isDown) {
        if (
          !this.checkIfAnimationIsPlaying("punchrightBlue") &&
          !this.checkIfAnimationIsPlaying("punchleftBlue") &&
          !this.checkIfAnimationIsPlaying("uppercutBlue") &&
          !this.checkIfAnimationIsPlaying("blockBlue")
        ) {
          this.body.setVelocityX(-60);
          if (!this.checkIfAnimationIsPlaying("hurtBlue"))
            this.anims.play("walkbackBlue", true);
        }
      }
      //idle
      else {
        if (
          !this.checkIfAnimationIsPlaying("punchrightBlue") &&
          !this.checkIfAnimationIsPlaying("punchleftBlue") &&
          !this.checkIfAnimationIsPlaying("uppercutBlue")
        ) {
          this.body.setVelocityX(0);
          if (!this.checkIfAnimationIsPlaying("hurtBlue"))
            this.anims.play("idleBlue", true);
          this.scene.combotext2.setText("");
        }
        if (this.is_in_knockback) {
          if (this.current_knockback_speed <= 0) {
            this.is_in_knockback = false;
          }
          this.body.setVelocityX(
            this.body.velocity.x - this.current_knockback_speed
          );
          this.current_knockback_speed -= 5;
        }

        if (this.is_hp_losing) {
          this.anims.play("hurtBlue");
        }

        this.on(
          Phaser.Animations.Events.ANIMATION_COMPLETE,
          this.reset_hurt,
          this
        );
        this.is_hp_losing = false;
      }
      // punchright
      if (Phaser.Input.Keyboard.JustDown(this.keyobj_c)) {
        this.attackanimation("punchrightBlue");
        this.scene.combotext2.setText("1 x Punch Right!!!");
        this.atack_started = true;
        // punchleft
      } else if (Phaser.Input.Keyboard.JustDown(this.keyobj_v)) {
        this.attackanimation("punchleftBlue");
        this.scene.combotext2.setText("1 x Punch Left!!!");
        this.atack_started = true;
      }
      // uppercut
      if (Phaser.Input.Keyboard.JustDown(this.keyobj_b)) {
        if (!this.checkIfAnimationIsPlaying("punchrightBlue"))
          this.attackanimation("uppercutBlue");
        this.scene.combotext2.setText("1 x Uppercut!!!");
        this.atack_started = true;
      }
      this.is_blocking = false;
      if (this.keyobj_x.isDown && this.shield != 0) {
        this.blockAnimation("blockBlue");
        this.is_blocking = true;
        this.scene.combotext2.setText("BLOOCCCKK!!!");
      }
      this.ssj_tranform();
    } else {
      if (this.ko_animation_played == false) {
        this.ko_animation_played = true;
        this.anims.play("koBlue", true);
        this.body.setVelocityX(0);
        this.body.setBounce(0);
        this.scene.combotext2.setText("KOOOOOO!!!!!");
        this.aura.destroy(true, this);
      }
    }
  }

  checkIfAnimationIsPlaying(animation) {
    return this.anims.currentAnim.key == animation;
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

  blockAnimation(anim) {
    this.body.setVelocityX(0);
    this.anims.play(anim, true);
  }

  ssj_tranform(){
    if(this.hp <= 10){
      if(this.keyobj_t.isDown && !this.is_ssj){
        this.aura.play("ssj", true)
        this.hp=50;
        this.shield=5;
        this.scene.update_hp_shield_player1();
        this.is_ssj = true
      }
    } 
  }

  attackCalulation() {
    // calcutating hitbox by atack
    // var animation_progress = this.player1.anims.getProgress();
    this.colliderPunch = this.scene.add.rectangle(
      this.x + 200,
      this.y + 70,
      80,
      80
    );

    this.scene.physics.add.existing(this.colliderPunch);
    this.colliderPunch.body.setImmovable(true);

    this.colliderPunch.setVisible(false);

    if (this.scene.physics.overlap(this.scene.player1, this.colliderPunch)) {
      this.scene.update_hp_shield_player2();

      if (this.colliderPunch) this.colliderPunch.destroy();
    }
  }

  reset_hurt() {
    this.is_hp_losing = false;
  }

  hp_lose() {
    this.hp -= 1;
    this.is_hp_losing = true;
    //this.anims.play("hurtBlue", true)
  }

  shield_lose() {
    if (this.shield > 0) {
      this.shield -= 1;
    }
  }
}
