class Player2Online extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, color) {
    super(scene, x, y, color);

    // which Player is playing variable
    this.player;

    // getting connection
    this.socket = this.getSocket();

    // Physics
    this.scene.physics.world.enable(this);
    this.scene.add.existing(this);

    // GameSprite Settings
    this.setPosition(x, y);
    this.setTexture("idle0Blue");
    this.play("idleBlue");

    // Tranformation Aura
    this.aura = this.scene.add.sprite(this.body.x, this.body.y, "hp_block");

    // Body Config
    this.body.setBounce(0.5);
    this.body.setSize(200, 300, true);
    this.body.setGravityY(100);
    this.body.setOffset(220, 87);
    this.body.setCollideWorldBounds(true);

    // Methoden Aufrufe für Erstellung
    this.init();
    this.create();
  }

  init() {
    // Screen Width, Height
    this.width = this.scene.sys.game.canvas.width;
    this.height = this.scene.sys.game.canvas.height;

    // Variables
    this.atack_started = false;
    this.ko_animation_played = false;
    this.is_blocking = false;
    this.is_in_knockback = false;
    this.current_knockback_speed = 0;
    this.is_hp_losing = false;
    this.moveWalkSend = false;

    // Player attributes
    this.hp = 50;
    this.shield = 5;
    this.colliderPunch;
    this.is_ssj = false;
  }

  create() {
    // cursor
    this.cursors = this.scene.input.keyboard.createCursorKeys();

    // Look in this function, after one animation is completed
    this.on("animationcomplete", (event) => {
      try {
        if (
          // amimations on which idle starts
          event.key == "punchrightBlue" ||
          event.key == "punchleftBlue" ||
          event.key == "uppercutBlue" ||
          event.key == "hurtBlue"
        ) {
          // idling and destroying collider punch
          this.anims.play("idleBlue", true);
          this.colliderPunch.destroy(true);
        }
        // block reset to false after atack
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

    // calling emit Handler
    // not in update method for better Performance
    // hust its already bad hust
    this.emitHandler();
  }

  update() {
    // moving aura in background of Player
    this.aura.setPosition(this.body.x + 100, this.body.y + 150).setDepth(-1);

    // updating if player isnt ko
    if (this.hp > 0) {
      // going right
      if (this.keyobj_d.isDown && this.player == 2 && !this.moveWalkSend) {
        if (
          !this.checkIfAnimationIsPlaying("punchrightBlue") &&
          !this.checkIfAnimationIsPlaying("punchleftBlue") &&
          !this.checkIfAnimationIsPlaying("uppercutBlue") &&
          !this.checkIfAnimationIsPlaying("blockBlue")
        ) {
          this.socket.emit("walk", 60);
        }
      }

      // going left
      else if (this.keyobj_a.isDown && this.player == 2) {
        if (
          !this.checkIfAnimationIsPlaying("punchrightBlue") &&
          !this.checkIfAnimationIsPlaying("punchleftBlue") &&
          !this.checkIfAnimationIsPlaying("uppercutBlue") &&
          !this.checkIfAnimationIsPlaying("blockBlue")
        ) {
          this.socket.emit("move", "walkbackBlue", -60);
        }
      }

      // no cursor moves to right or left detected
      else {
        if (
          !this.checkIfAnimationIsPlaying("punchrightBlue") &&
          !this.checkIfAnimationIsPlaying("punchleftBlue") &&
          !this.checkIfAnimationIsPlaying("uppercutBlue")
        ) {
          // idling
          this.socket.emit("move", "idleBlue", 0);
        }

        // knockbacking player
        if (this.is_in_knockback) {
          if (this.current_knockback_speed <= 0) {
            this.is_in_knockback = false;
          }
          this.body.setVelocityX(
            this.body.velocity.x - this.current_knockback_speed
          );
          this.current_knockback_speed -= 5;
        }

        // plays hurt anim
        if (this.is_hp_losing) {
          this.anims.play("hurtBlue");
        }

        // reseting hp lose
        this.on(
          Phaser.Animations.Events.ANIMATION_COMPLETE,
          this.reset_hurt,
          this
        );
        this.is_hp_losing = false;
      }

      // punchright
      if (Phaser.Input.Keyboard.JustDown(this.keyobj_c) && this.player == 2) {
        this.socket.emit("atackmove", "punchrightBlue");
      }

      // punchleft
      else if (
        Phaser.Input.Keyboard.JustDown(this.keyobj_v) &&
        this.player == 2
      ) {
        this.socket.emit("atackmove", "punchleftBlue");
      }

      // uppercut
      if (Phaser.Input.Keyboard.JustDown(this.keyobj_b) && this.player == 2) {
        this.socket.emit("atackmove", "uppercutBlue");
      }

      // blocking
      this.is_blocking = false;
      if (this.keyobj_x.isDown && this.shield != 0 && this.player == 2) {
        this.socket.emit("atackmove", "blockBlue");
      }

      // tranformation into SSJ
      this.ssj_tranform();

      // Player Ko
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

  // here are the functions which are used above

  // checking if an animation is playing
  checkIfAnimationIsPlaying(animation) {
    return this.anims.currentAnim.key == animation;
  }

  // atack animations
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

  // block animation
  blockAnimation(anim) {
    this.body.setVelocityX(0);
    this.anims.play(anim, true);
  }

  // ssj tranformation
  ssj_tranform() {
    // checking if player is low enough
    if (this.hp <= 10) {
      // check key press and if transformation is existing
      if (this.keyobj_t.isDown && !this.is_ssj && this.player == 2) {
        this.aura.play("ssj", true);
        this.hp = 50;
        this.shield = 5;
        this.scene.update_hp_shield_player1();
        this.is_ssj = true;
      }
    }
  }

  // atack calculation
  attackCalulation() {
    // calcutating hitbox by atack
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

  // resetting hurt variable
  reset_hurt() {
    this.is_hp_losing = false;
  }

  // lose hp
  hp_lose() {
    this.socket.emit("hp_lose", 1);
    this.socket.on("hp_lose", (hp) => {
      this.hp -= hp;
      this.is_hp_losing = true;
    });
  }
  // losing shield
  shield_lose() {
    if (this.shield > 0) {
      this.shield -= 1;
    }
  }

  // getting the right socket
  getSocket() {
    // defining the players
    this.player = 2;

    // use the sockket of create Lobby Scene
    var socket = this.scene.game.scene.getScene("CreateLobbyScene").client;

    // if this socket is undefined use the socket from Join Lobby Scene
    if (socket == undefined) {
      this.player = 1;
      socket = this.scene.socket2;
    }

    // returning the socket
    return socket;
  }

  // handling emits
  emitHandler() {
    // walkblue
    this.socket.on("walkBlue", (vel) => {
      this.body.setVelocityX(vel);
      if (!this.checkIfAnimationIsPlaying("hurtBlue"))
        this.anims.play("walkBlue", true);
    });

    // walkbackBlue
    this.socket.on("walkbackBlue", (vel) => {
      this.body.setVelocityX(vel);
      if (!this.checkIfAnimationIsPlaying("hurtBlue"))
        this.anims.play("walkbackBlue", true);
    });

    // idle
    this.socket.on("idleBlue", (vel) => {
      this.body.setVelocityX(vel);
      if (!this.checkIfAnimationIsPlaying("hurtBlue"))
        this.anims.play("idleBlue", true);
      this.scene.combotext2.setText("");
    });

    // punchrightBlue
    this.socket.on("punchrightBlue", () => {
      this.attackanimation("punchrightBlue");
      this.scene.combotext2.setText("1 x Punch Right!!!");
      this.atack_started = true;
    });

    // punchleftBlue
    this.socket.on("punchleftBlue", () => {
      this.attackanimation("punchleftBlue");
      this.scene.combotext2.setText("1 x Punch Left!!!");
      this.atack_started = true;
    });

    // uppecutBlue
    this.socket.on("uppercutBlue", () => {
      if (!this.checkIfAnimationIsPlaying("punchrightBlue"))
        this.attackanimation("uppercutBlue");
      this.scene.combotext2.setText("1 x Uppercut!!!");
      this.atack_started = true;
    });

    this.socket.on("blockBlue", () => {
      this.blockAnimation("blockBlue");
      this.is_blocking = true;
      this.scene.combotext2.setText("BLOOCCCKK!!!");
    });
  }
}
