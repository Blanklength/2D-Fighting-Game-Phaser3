//Imports

//Globale Variablen
//const example = 2;

class Playe2 extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, color) {
    super(scene, x, y, color);

    this.scene.physics.world.enable(this);
    this.scene.add.existing(this);

    this.setPosition(x, y);

    this.setTexture("idle0");
    this.play("idle");

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
        event.key == "punchright" ||
        event.key == "punchleft" ||
        event.key == "uppercut"
      )
        this.anims.play("idle", true);
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
  }

  update() {
    // going right
    if (this.cursors.right.isDown) {
      if (
        !this.checkIfAnimationIsPlaying("punchright") &&
        !this.checkIfAnimationIsPlaying("punchleft") &&
        !this.checkIfAnimationIsPlaying("uppercut")
      ) {
        this.body.setVelocityX(60);
        this.anims.play("walk", true);
      }
    }
    // going left
    else if (this.cursors.left.isDown) {
      if (
        !this.checkIfAnimationIsPlaying("punchright") &&
        !this.checkIfAnimationIsPlaying("punchleft") &&
        !this.checkIfAnimationIsPlaying("uppercut")
      ) {
        this.body.setVelocityX(-60);
        this.anims.play("walkback", true);
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
        this.anims.play("idle", true);
      }
    }

    if (Phaser.Input.Keyboard.JustDown(this.keyobj_j)) {
      this.attackanimation("punchright");
    } else if (Phaser.Input.Keyboard.JustDown(this.keyobj_k)) {
      this.attackanimation("punchleft");
    }
    if (Phaser.Input.Keyboard.JustDown(this.keyobj_l)) {
      if (!this.checkIfAnimationIsPlaying("punchright"))
        this.attackanimation("uppercut");
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
}
