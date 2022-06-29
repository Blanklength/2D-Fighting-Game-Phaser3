class PreloadFightScene extends Phaser.Scene {
  constructor() {
    super({ key: "PreloadFightScene" });
  }

  // Preloads everything
  preload() {
    this.load.image("ground", "assets/ground.png");
    this.load.image("start", "assets/better_start_btn.png");
    // moves for playere 1

    this.preloadRed();

    //this.preloadBlue();

  }

  preloadRed(){
          // idle images
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
  
      // walk images
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
  
      // punch right images
      this.load.image(
        "punchR0",
        "assets/MiniBoxing/MiniBoxingSpriteLite/PunchRight/__Boxing04_PunchRight_000.png"
      );
      this.load.image(
        "punchR1",
        "assets/MiniBoxing/MiniBoxingSpriteLite/PunchRight/__Boxing04_PunchRight_001.png"
      );
      this.load.image(
        "punchR2",
        "assets/MiniBoxing/MiniBoxingSpriteLite/PunchRight/__Boxing04_PunchRight_002.png"
      );
      this.load.image(
        "punchR3",
        "assets/MiniBoxing/MiniBoxingSpriteLite/PunchRight/__Boxing04_PunchRight_003.png"
      );
      this.load.image(
        "punchR4",
        "assets/MiniBoxing/MiniBoxingSpriteLite/PunchRight/__Boxing04_PunchRight_004.png"
      );
  
      // uppercut images
      this.load.image(
        "uppercut0",
        "assets/MiniBoxing/MiniBoxingSpriteLite/PunchUp/__Boxing04_PunchUp_000.png"
      );
      this.load.image(
        "uppercut1",
        "assets/MiniBoxing/MiniBoxingSpriteLite/PunchUp/__Boxing04_PunchUp_001.png"
      );
      this.load.image(
        "uppercut2",
        "assets/MiniBoxing/MiniBoxingSpriteLite/PunchUp/__Boxing04_PunchUp_002.png"
      );
      this.load.image(
        "uppercut3",
        "assets/MiniBoxing/MiniBoxingSpriteLite/PunchUp/__Boxing04_PunchUp_003.png"
      );
      this.load.image(
        "uppercut4",
        "assets/MiniBoxing/MiniBoxingSpriteLite/PunchUp/__Boxing04_PunchUp_004.png"
      );
      this.load.image(
        "uppercut5",
        "assets/MiniBoxing/MiniBoxingSpriteLite/PunchUp/__Boxing04_PunchUp_005.png"
      );
  
      // punch left images
  
      this.load.image(
        "punchL0",
        "assets/MiniBoxing/MiniBoxingSpriteLite/PunchLeft/__Boxing04_PunchLeft_000.png"
      );
      this.load.image(
        "punchL1",
        "assets/MiniBoxing/MiniBoxingSpriteLite/PunchLeft/__Boxing04_PunchLeft_001.png"
      );
      this.load.image(
        "punchL2",
        "assets/MiniBoxing/MiniBoxingSpriteLite/PunchLeft/__Boxing04_PunchLeft_002.png"
      );
      this.load.image(
        "punchL3",
        "assets/MiniBoxing/MiniBoxingSpriteLite/PunchLeft/__Boxing04_PunchLeft_003.png"
      );
      this.load.image(
        "punchL4",
        "assets/MiniBoxing/MiniBoxingSpriteLite/PunchLeft/__Boxing04_PunchLeft_004.png"
      );
      this.load.image(
        "punchL5",
        "assets/MiniBoxing/MiniBoxingSpriteLite/PunchLeft/__Boxing04_PunchLeft_005.png"
      
      );
  }

  create() {
    this.createAnims();
    this.scene.start("FightScene");
  }

  createAnims() {
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
        { key: "walk9" },
      ],
      frameRate: 15,
      repeat: -1,
    });

    this.anims.create({
      key: "walkback",
      frames: [
        { key: "walkback0" },
        { key: "walkback1" },
        { key: "walkback2" },
        { key: "walkback3" },
        { key: "walkback4" },
        { key: "walkback5" },
        { key: "walkback6" },
        { key: "walkback7" },
        { key: "walkback8" },
      ],
      frameRate: 15,
      repeat: -1,
    });

    this.anims.create({
      key: "punchright",
      frames: [
        { key: "punchR0" },
        { key: "punchR1" },
        { key: "punchR2" },
        { key: "punchR3" },
        { key: "punchR4" },
      ],
      frameRate: 15,
    });

    this.anims.create({
      key: "punchleft",
      frames: [
        { key: "punchL0" },
        { key: "punchL1" },
        { key: "punchL2" },
        { key: "punchL3" },
        { key: "punchL4" },
        { key: "punchL4" },
      ],
      frameRate: 15,
    });

    this.anims.create({
      key: "uppercut",
      frames: [
        { key: "uppercut0" },
        { key: "uppercut1" },
        { key: "uppercut2" },
        { key: "uppercut3" },
        { key: "uppercut4" },
        { key: "uppercut5" },
      ],
      frameRate: 15,
    });
  }
preloadBlue(){

    this.load.image(
        "idle0Blue",
        "assets/MiniBoxingBLUE/BLUE/Idle/__Boxing04_Idle_000.png"
      );
      this.load.image(
        "idle1Blue",
        "assets/MiniBoxing/MiniBoxingSpriteLite/Idle/__Boxing04_Idle_001.png"
      );
      this.load.image(
        "idle2Blue",
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
  
      // walk images
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
  
      // punch right images
      this.load.image(
        "punchR0",
        "assets/MiniBoxing/MiniBoxingSpriteLite/PunchRight/__Boxing04_PunchRight_000.png"
      );
      this.load.image(
        "punchR1",
        "assets/MiniBoxing/MiniBoxingSpriteLite/PunchRight/__Boxing04_PunchRight_001.png"
      );
      this.load.image(
        "punchR2",
        "assets/MiniBoxing/MiniBoxingSpriteLite/PunchRight/__Boxing04_PunchRight_002.png"
      );
      this.load.image(
        "punchR3",
        "assets/MiniBoxing/MiniBoxingSpriteLite/PunchRight/__Boxing04_PunchRight_003.png"
      );
      this.load.image(
        "punchR4",
        "assets/MiniBoxing/MiniBoxingSpriteLite/PunchRight/__Boxing04_PunchRight_004.png"
      );
  
      // uppercut images
      this.load.image(
        "uppercut0",
        "assets/MiniBoxing/MiniBoxingSpriteLite/PunchUp/__Boxing04_PunchUp_000.png"
      );
      this.load.image(
        "uppercut1",
        "assets/MiniBoxing/MiniBoxingSpriteLite/PunchUp/__Boxing04_PunchUp_001.png"
      );
      this.load.image(
        "uppercut2",
        "assets/MiniBoxing/MiniBoxingSpriteLite/PunchUp/__Boxing04_PunchUp_002.png"
      );
      this.load.image(
        "uppercut3",
        "assets/MiniBoxing/MiniBoxingSpriteLite/PunchUp/__Boxing04_PunchUp_003.png"
      );
      this.load.image(
        "uppercut4",
        "assets/MiniBoxing/MiniBoxingSpriteLite/PunchUp/__Boxing04_PunchUp_004.png"
      );
      this.load.image(
        "uppercut5",
        "assets/MiniBoxing/MiniBoxingSpriteLite/PunchUp/__Boxing04_PunchUp_005.png"
      );
  
      // punch left images
  
      this.load.image(
        "punchL0",
        "assets/MiniBoxing/MiniBoxingSpriteLite/PunchLeft/__Boxing04_PunchLeft_000.png"
      );
      this.load.image(
        "punchL1",
        "assets/MiniBoxing/MiniBoxingSpriteLite/PunchLeft/__Boxing04_PunchLeft_001.png"
      );
      this.load.image(
        "punchL2",
        "assets/MiniBoxing/MiniBoxingSpriteLite/PunchLeft/__Boxing04_PunchLeft_002.png"
      );
      this.load.image(
        "punchL3",
        "assets/MiniBoxing/MiniBoxingSpriteLite/PunchLeft/__Boxing04_PunchLeft_003.png"
      );
      this.load.image(
        "punchL4",
        "assets/MiniBoxing/MiniBoxingSpriteLite/PunchLeft/__Boxing04_PunchLeft_004.png"
      );
      this.load.image(
        "punchL5",
        "assets/MiniBoxing/MiniBoxingSpriteLite/PunchLeft/__Boxing04_PunchLeft_005.png"
      );


}

  
}
