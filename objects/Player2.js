//Imports

//Globale Variablen
//const example = 2;

class Player2 extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, color) {
    super(scene, x, y, color);
    this.atack_started = false;

    this.scene.physics.world.enable(this);
    this.scene.add.existing(this);

    this.setPosition(x, y);

    this.setTexture("idle0Blue");
    this.play("idleBlue");

    this.hp = 50;

    // player Config
    this.body.setBounce(0.2);
    this.body.setSize(300, 300, true);
    this.body.setGravityY(100);
    this.body.setCollideWorldBounds(true);

    //Methoden Aufrufe für Erstellung
    this.init();
    this.create();

    //Offset Body -----------------
    //body.setOffset(x, y);
  }

  init(enemies, data) {
    //Variables
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
      if (
        event.key == "punchrightBlue" ||
        event.key == "punchleftBlue" ||
        event.key == "uppercutBlue"
      )
        this.anims.play("idleBlue", true);
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
  }

  update() {
    // going right
    this.flipX = true;
    if (this.hp > 0) {
      if (this.keyobj_d.isDown) {
        if (
          !this.checkIfAnimationIsPlaying("punchrightBlue") &&
          !this.checkIfAnimationIsPlaying("punchleftBlue") &&
          !this.checkIfAnimationIsPlaying("uppercutBlue")
        ) {
          this.body.setVelocityX(60);
          this.anims.play("walkbackBlue", true);
        }
      }
      // going left
      else if (this.keyobj_a.isDown) {
        if (
          !this.checkIfAnimationIsPlaying("punchrightBlue") &&
          !this.checkIfAnimationIsPlaying("punchleftBlue") &&
          !this.checkIfAnimationIsPlaying("uppercutBlue")
        ) {
          this.body.setVelocityX(-60);
          this.anims.play("walkBlue", true);
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
          this.anims.play("idleBlue", true);
        }
      }

      if (Phaser.Input.Keyboard.JustDown(this.keyobj_c)) {
        this.attackanimation("punchrightBlue");
        this.atack_started = true;
      } else if (Phaser.Input.Keyboard.JustDown(this.keyobj_v)) {
        this.attackanimation("punchleftBlue");
        this.atack_started = true;
      }
      if (Phaser.Input.Keyboard.JustDown(this.keyobj_b)) {
        if (!this.checkIfAnimationIsPlaying("punchrightBlue"))
          this.attackanimation("uppercutBlue");
        this.atack_started = true;
      }
    } else {
      this.anims.play("koBlue", true);
      this.body.setVelocityX(0);
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
  }

  hp_lose() {
    this.hp -= 1;
  }
}
