class FightScene extends Phaser.Scene {
  constructor() {
    super("FightScene");
  }

  preload() {
    this.load.image("ground", "assets/ground.png");
    this.load.image("start", "assets/better_start_btn.png");

    // idle animationn
    this.load.image(
      "idle0",
      "assets/MiniBoxing/MiniBoxingSpriteLite/Idle/__Boxing04_Idle_000.png"
    );
    this.load.image(
      "idle1",
      "assets/MiniBoxing/MiniBoxingSpriteLite/Idle/__Boxing04_Idle_001.png"
    );
    this.load.image(
      "idle2",
      "assets/MiniBoxing/MiniBoxingSpriteLite/Idle/__Boxing04_Idle_002.png"
    );
    this.load.image(
      "idle3",
      "assets/MiniBoxing/MiniBoxingSpriteLite/Idle/__Boxing04_Idle_003.png"
    );
    this.load.image(
      "idle4",
      "assets/MiniBoxing/MiniBoxingSpriteLite/Idle/__Boxing04_Idle_004.png"
    );
    this.load.image(
      "idle5",
      "assets/MiniBoxing/MiniBoxingSpriteLite/Idle/__Boxing04_Idle_005.png"
    );
    this.load.image(
      "idle6",
      "assets/MiniBoxing/MiniBoxingSpriteLite/Idle/__Boxing04_Idle_006.png"
    );
    this.load.image(
      "idle7",
      "assets/MiniBoxing/MiniBoxingSpriteLite/Idle/__Boxing04_Idle_007.png"
    );
    this.load.image(
      "idle8",
      "assets/MiniBoxing/MiniBoxingSpriteLite/Idle/__Boxing04_Idle_008.png"
    );

    // walk animation
    this.load.image(
      "walk0",
      "assets/MiniBoxing/MiniBoxingSpriteLite/Walk/__Boxing04_Walk_000.png"
    );
    this.load.image(
      "walk1",
      "assets/MiniBoxing/MiniBoxingSpriteLite/Walk/__Boxing04_Walk_001.png"
    );
    this.load.image(
      "walk2",
      "assets/MiniBoxing/MiniBoxingSpriteLite/Walk/__Boxing04_Walk_002.png"
    );
    this.load.image(
      "walk3",
      "assets/MiniBoxing/MiniBoxingSpriteLite/Walk/__Boxing04_Walk_003.png"
    );
    this.load.image(
      "walk4",
      "assets/MiniBoxing/MiniBoxingSpriteLite/Walk/__Boxing04_Walk_004.png"
    );
    this.load.image(
      "walk5",
      "assets/MiniBoxing/MiniBoxingSpriteLite/Walk/__Boxing04_Walk_005.png"
    );
    this.load.image(
      "walk6",
      "assets/MiniBoxing/MiniBoxingSpriteLite/Walk/__Boxing04_Walk_006.png"
    );
    this.load.image(
      "walk7",
      "assets/MiniBoxing/MiniBoxingSpriteLite/Walk/__Boxing04_Walk_007.png"
    );
    this.load.image(
      "walk8",
      "assets/MiniBoxing/MiniBoxingSpriteLite/Walk/__Boxing04_Walk_008.png"
    );
    this.load.image(
      "walk9",
      "assets/MiniBoxing/MiniBoxingSpriteLite/Walk/__Boxing04_Walk_009.png"
    );

    // walk back animation 
    this.load.image(
      "walkback0",
      "assets/MiniBoxing/MiniBoxingSpriteLite/WalkBack/__Boxing04_WalkBack_000.png"
    );
    this.load.image(
      "walkback1",
      "assets/MiniBoxing/MiniBoxingSpriteLite/WalkBack/__Boxing04_WalkBack_001.png"
    );
    this.load.image(
      "walkback2",
      "assets/MiniBoxing/MiniBoxingSpriteLite/WalkBack/__Boxing04_WalkBack_002.png"
    );
    this.load.image(
      "walkback3",
      "assets/MiniBoxing/MiniBoxingSpriteLite/WalkBack/__Boxing04_WalkBack_003.png"
    );
    this.load.image(
      "walkback4",
      "assets/MiniBoxing/MiniBoxingSpriteLite/WalkBack/__Boxing04_WalkBack_004.png"
    );
    this.load.image(
      "walkback5",
      "assets/MiniBoxing/MiniBoxingSpriteLite/WalkBack/__Boxing04_WalkBack_005.png"
    );
    this.load.image(
      "walkback6",
      "assets/MiniBoxing/MiniBoxingSpriteLite/WalkBack/__Boxing04_WalkBack_006.png"
    );
    this.load.image(
      "walkback7",
      "assets/MiniBoxing/MiniBoxingSpriteLite/WalkBack/__Boxing04_WalkBack_007.png"
    );
    this.load.image(
      "walkback8",
      "assets/MiniBoxing/MiniBoxingSpriteLite/WalkBack/__Boxing04_WalkBack_008.png"
    );
    this.load.image(
      "walkback9",
      "assets/MiniBoxing/MiniBoxingSpriteLite/WalkBack/__Boxing04_Walk_009.png"
    );
  }

  create() {
    let { width, height } = this.sys.game.canvas;
    this.platform = this.physics.add.staticGroup();
    this.ground = this.platform.create(width / 2, height / 2, "ground");
    this.ground.scaleX = 10;

    this.anims.create({
      key: "idle",
      frames: [
        { key: "idle0" },
        { key: "idle1" },
        { key: "idle2" },
        { key: "idle3" },
        { key: "idle4" },
        { key: "idle5" },
        { key: "idle6" },
        { key: "idle7" },
        { key: "idle8", duration: 50 },
      ],
      frameRate: 8,
      repeat: -1,
    });

    this.player1 = this.physics.add.sprite(400, 200, "idle0").play("idle");
    this.player1.setBounce(0.2);
    this.player1.setCollideWorldBounds(true);
    this.physics.add.existing(this.platform);
    this.physics.add.existing(this.ground);

    this.physics.add.collider(this.player1, this.platform);
    this.physics.add.collider(this.player1, this.ground);
  }

  update() {
    this.anims.create({
      key: "walk",
      frames: [
        { key: "walk0" },
        { key: "walk1" },
        { key: "walk2" },
        { key: "walk3" },
        { key: "walk4" },
        { key: "walk5" },
        { key: "walk6" },
        { key: "walk7" },
        { key: "walk8" },
        { key: "walk9", duration: 10 },
      ],
      frameRate: 8,
    });

    this.anims.create({
      key: "walk",
      frames: [
        { key: "walk0" },
        { key: "walk1" },
        { key: "walk2" },
        { key: "walk3" },
        { key: "walk4" },
        { key: "walk5" },
        { key: "walk6" },
        { key: "walk7" },
        { key: "walk8" },
        { key: "walk9", duration: 10 },
      ],
      frameRate: 8,
    });


  }
}
