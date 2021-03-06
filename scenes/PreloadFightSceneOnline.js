class PreloadFightSceneOnline extends Phaser.Scene {
  constructor() {
    super({ key: "PreloadFightSceneOnline" });
  }
  init(data){
    this.socket2 = data;
  }

  // Preloads everything
  preload() {

    this.load.image("ground", "assets/ground.png");
    this.load.image("start", "assets/better_start_btn.png");
    this.load.image('hpBlock', "assets/hp/hp_block.png");
    this.load.image('shieldBlock', 'assets/shield/shield_block.png')
    

    // ssj images
    this.load.image("ssj0", "assets/ssj_aura/ssj_frame_0.png")
    this.load.image("ssj1", "assets/ssj_aura/ssj_frame_1.png")
    this.load.image("ssj2", "assets/ssj_aura/ssj_frane_2.png")


    this.preloadBlue();
    this.preloadRed();
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

      this.load.image(
        "ko0",
        "assets/MiniBoxing/MiniBoxingSpriteLite/KO/__Boxing04_KO_000.png"
        );
      this.load.image(
        "ko1",
        "assets/MiniBoxing/MiniBoxingSpriteLite/KO/__Boxing04_KO_001.png"
        );
      this.load.image(
        "ko2",
        "assets/MiniBoxing/MiniBoxingSpriteLite/KO/__Boxing04_KO_002.png"
        );
      this.load.image(
        "ko3",
        "assets/MiniBoxing/MiniBoxingSpriteLite/KO/__Boxing04_KO_003.png"
        );
      this.load.image(
        "ko4",
        "assets/MiniBoxing/MiniBoxingSpriteLite/KO/__Boxing04_KO_004.png"
        );
      this.load.image(
        "ko5",
        "assets/MiniBoxing/MiniBoxingSpriteLite/KO/__Boxing04_KO_005.png"
                );
      this.load.image(
        "ko6",
        "assets/MiniBoxing/MiniBoxingSpriteLite/KO/__Boxing04_KO_006.png"
      );
      this.load.image(
        "ko7",
        "assets/MiniBoxing/MiniBoxingSpriteLite/KO/__Boxing04_KO_007.png"
      );
      this.load.image(
        "ko8",
        "assets/MiniBoxing/MiniBoxingSpriteLite/KO/__Boxing04_KO_008.png"
      );
      this.load.image(
        "ko9",
        "assets/MiniBoxing/MiniBoxingSpriteLite/KO/__Boxing04_KO_009.png"
      );

      this.load.image(
        "block0",
        "assets/MiniBoxing/MiniBoxingSpriteLite/Blocking/__Boxing04_Blocking_000.png"
      )

      this.load.image(
        "block1",
        "assets/MiniBoxing/MiniBoxingSpriteLite/Blocking/__Boxing04_Blocking_001.png"
      )

      this.load.image(
        "block2",
        "assets/MiniBoxing/MiniBoxingSpriteLite/Blocking/__Boxing04_Blocking_002.png"
      )

      this.load.image(
        "block3",
        "assets/MiniBoxing/MiniBoxingSpriteLite/Blocking/__Boxing04_Blocking_003.png"
      )

      this.load.image(
        "block4",
        "assets/MiniBoxing/MiniBoxingSpriteLite/Blocking/__Boxing04_Blocking_004.png"
      )

      this.load.image(
        "block5",
        "assets/MiniBoxing/MiniBoxingSpriteLite/Blocking/__Boxing04_Blocking_005.png"
      )

      this.load.image(
        "block6",
        "assets/MiniBoxing/MiniBoxingSpriteLite/Blocking/__Boxing04_Blocking_006.png"
      )

      this.load.image(
        "block7",
        "assets/MiniBoxing/MiniBoxingSpriteLite/Blocking/__Boxing04_Blocking_007.png"
      )

      this.load.image(
        "block8",
        "assets/MiniBoxing/MiniBoxingSpriteLite/Blocking/__Boxing04_Blocking_008.png"
      )

      this.load.image(
        "block9",
        "assets/MiniBoxing/MiniBoxingSpriteLite/Blocking/__Boxing04_Blocking_009.png"
      )

      this.load.image(
        "dizzy0",
        "assets/MiniBoxing/MiniBoxingSpriteLite/Dizzy/__Boxing04_Dizzy_000.png"
      )
      
      this.load.image(
        "dizzy1",
        "assets/MiniBoxing/MiniBoxingSpriteLite/Dizzy/__Boxing04_Dizzy_001.png"
      )

      this.load.image(
        "dizzy2",
        "assets/MiniBoxing/MiniBoxingSpriteLite/Dizzy/__Boxing04_Dizzy_002.png"
      )
      
      this.load.image(
        "dizzy3",
        "assets/MiniBoxing/MiniBoxingSpriteLite/Dizzy/__Boxing04_Dizzy_003.png"
      )

      this.load.image(
        "dizzy4",
        "assets/MiniBoxing/MiniBoxingSpriteLite/Dizzy/__Boxing04_Dizzy_004.png"
      )

      this.load.image(
        "dizzy5",
        "assets/MiniBoxing/MiniBoxingSpriteLite/Dizzy/__Boxing04_Dizzy_005.png"
      )

      this.load.image(
        "dizzy6",
        "assets/MiniBoxing/MiniBoxingSpriteLite/Dizzy/__Boxing04_Dizzy_006.png"
      )

      this.load.image(
        "dizzy7",
        "assets/MiniBoxing/MiniBoxingSpriteLite/Dizzy/__Boxing04_Dizzy_007.png"
      )

      this.load.image(
        'hurt0',
        'assets/MiniBoxing/MiniBoxingSpriteLite/Hurt/__Boxing04_Hurt_000.png'
      )
      this.load.image(
        'hurt1',
        'assets/MiniBoxing/MiniBoxingSpriteLite/Hurt/__Boxing04_Hurt_001.png'
      )
      this.load.image(
        'hurt2',
        'assets/MiniBoxing/MiniBoxingSpriteLite/Hurt/__Boxing04_Hurt_002.png'
      )
      this.load.image(
        'hurt3',
        'assets/MiniBoxing/MiniBoxingSpriteLite/Hurt/__Boxing04_Hurt_003.png'
      )
      this.load.image(
        'hurt4',
        'assets/MiniBoxing/MiniBoxingSpriteLite/Hurt/__Boxing04_Hurt_004.png'
      )
      this.load.image(
        'hurt5',
        'assets/MiniBoxing/MiniBoxingSpriteLite/Hurt/__Boxing04_Hurt_005.png'
      )
      this.load.image(
        'hurt6',
        'assets/MiniBoxing/MiniBoxingSpriteLite/Hurt/__Boxing04_Hurt_006.png'
      )
      this.load.image(
        'hurt7',
        'assets/MiniBoxing/MiniBoxingSpriteLite/Hurt/__Boxing04_Hurt_007.png'
      )

  }

  preloadBlue(){

    this.load.image(
        "idle0Blue",
        "assets/MiniBoxingBlue/blue/Idle/__Boxing04_Idle_000.png"
      );
      this.load.image(
        "idle1Blue",
        "assets/MiniBoxingBlue/blue/Idle/__Boxing04_Idle_001.png"
      );
      this.load.image(
        "idle2Blue",
        "assets/MiniBoxingBlue/blue/Idle/__Boxing04_Idle_002.png"
      );
      this.load.image(
        "idle3Blue",
        "assets/MiniBoxingBlue/blue/Idle/__Boxing04_Idle_003.png"
      );
      this.load.image(
        "idle4Blue",
        "assets/MiniBoxingBlue/blue/Idle/__Boxing04_Idle_004.png"
      );
      this.load.image(
        "idle5Blue",
        "assets/MiniBoxingBlue/blue/Idle/__Boxing04_Idle_005.png"
      );
      this.load.image(
        "idle6Blue",
        "assets/MiniBoxingBlue/blue/Idle/__Boxing04_Idle_006.png"
      );
      this.load.image(
        "idle7Blue",
        "assets/MiniBoxingBlue/blue/Idle/__Boxing04_Idle_007.png"
      );
      this.load.image(
        "idle8Blue",
        "assets/MiniBoxingBlue/blue/Idle/__Boxing04_Idle_008.png"
      );

      this.load.image(
        "idle9Blue",
        "assets/MiniBoxingBlue/blue/Idle/__Boxing04_Idle_009.png"
      );
  
      // walk images
      this.load.image(
        "walk0Blue",
        "assets/MiniBoxingBlue/blue/Walk/__Boxing04_Walk_000.png"
      );
      this.load.image(
        "walk1Blue",
        "assets/MiniBoxingBlue/blue/Walk/__Boxing04_Walk_001.png"
      );
      this.load.image(
        "walk2Blue",
        "assets/MiniBoxingBlue/blue/Walk/__Boxing04_Walk_002.png"
      );
      this.load.image(
        "walk3Blue",
        "assets/MiniBoxingBlue/blue/Walk/__Boxing04_Walk_003.png"
      );
      this.load.image(
        "walk4Blue",
        "assets/MiniBoxingBlue/blue/Walk/__Boxing04_Walk_004.png"
      );
      this.load.image(
        "walk5Blue",
        "assets/MiniBoxingBlue/blue/Walk/__Boxing04_Walk_005.png"
      );
      this.load.image(
        "walk6Blue",
        "assets/MiniBoxingBlue/blue/Walk/__Boxing04_Walk_006.png"
      );
      this.load.image(
        "walk7Blue",
        "assets/MiniBoxingBlue/blue/Walk/__Boxing04_Walk_007.png"
      );
      this.load.image(
        "walk8Blue",
        "assets/MiniBoxingBlue/blue/Walk/__Boxing04_Walk_008.png"
      );
      this.load.image(
        "walk9Blue",
        "assets/MiniBoxingBlue/blue/Walk/__Boxing04_Walk_009.png"
      );
  
      // walk back animation
      this.load.image(
        "walkbackBlue0",
        "assets/MiniBoxingBlue/blue/WalkBack/__Boxing04_WalkBack_000.png"
      );
      this.load.image(
        "walkbackBlue1",
        "assets/MiniBoxingBlue/blue/WalkBack/__Boxing04_WalkBack_001.png"
      );
      this.load.image(
        "walkbackBlue2",
        "assets/MiniBoxingBlue/blue/WalkBack/__Boxing04_WalkBack_002.png"
      );
      this.load.image(
        "walkbackBlue3",
        "assets/MiniBoxingBlue/blue/WalkBack/__Boxing04_WalkBack_003.png"
      );
      this.load.image(
        "walkbackBlue4",
        "assets/MiniBoxingBlue/blue/WalkBack/__Boxing04_WalkBack_004.png"
      );
      this.load.image(
        "walkbackBlue5",
        "assets/MiniBoxingBlue/blue/WalkBack/__Boxing04_WalkBack_005.png"
      );
      this.load.image(
        "walkbackBlue6",
        "assets/MiniBoxingBlue/blue/WalkBack/__Boxing04_WalkBack_006.png"
      );
      this.load.image(
        "walkbackBlue7",
        "assets/MiniBoxingBlue/blue/WalkBack/__Boxing04_WalkBack_007.png"
      );
      this.load.image(
        "walkbackBlue8",
        "assets/MiniBoxingBlue/blue/WalkBack/__Boxing04_WalkBack_008.png"
      );
  
      this.load.image(
        "walkbackBlue9",
        "assets/MiniBoxingBlue/blue/WalkBack/__Boxing04_WalkBack_009.png"
      );
  
      // punch right images
      this.load.image(
        "punchBlueR0",
        "assets/MiniBoxingBlue/blue/PunchRight/__Boxing04_PunchRight_000.png"
      );
      this.load.image(
        "punchBlueR1",
        "assets/MiniBoxingBlue/blue/PunchRight/__Boxing04_PunchRight_001.png"
      );
      this.load.image(
        "punchBlueR2",
        "assets/MiniBoxingBlue/blue/PunchRight/__Boxing04_PunchRight_002.png"
      );
      this.load.image(
        "punchBlueR3",
        "assets/MiniBoxingBlue/blue/PunchRight/__Boxing04_PunchRight_003.png"
      );
      this.load.image(
        "punchBlueR4",
        "assets/MiniBoxingBlue/blue/PunchRight/__Boxing04_PunchRight_004.png"
      );

      this.load.image(
        "punchBlueR5",
        "assets/MiniBoxingBlue/blue/PunchRight/__Boxing04_PunchRight_005.png"
      );
  
      // uppercut images
      this.load.image(
        "uppercutBlue0",
        "assets/MiniBoxingBlue/blue/PunchUp/__Boxing04_PunchUp_000.png"
      );
      this.load.image(
        "uppercutBlue1",
        "assets/MiniBoxingBlue/blue/PunchUp/__Boxing04_PunchUp_001.png"
      );
      this.load.image(
        "uppercutBlue2",
        "assets/MiniBoxingBlue/blue/PunchUp/__Boxing04_PunchUp_002.png"
      );
      this.load.image(
        "uppercutBlue3",
        "assets/MiniBoxingBlue/blue/PunchUp/__Boxing04_PunchUp_003.png"
      );
      this.load.image(
        "uppercutBlue4",
        "assets/MiniBoxingBlue/blue/PunchUp/__Boxing04_PunchUp_004.png"
      );
      this.load.image(
        "uppercutBlue5",
        "assets/MiniBoxingBlue/blue/PunchUp/__Boxing04_PunchUp_005.png"
      );
      this.load.image(
        "uppercutBlue6",
        "assets/MiniBoxingBlue/blue/PunchUp/__Boxing04_PunchUp_006.png"
      );
  
      // punch left images
  
      this.load.image(
        "punchLBlue0",
        "assets/MiniBoxingBlue/blue/PunchLeft/__Boxing04_PunchLeft_000.png"
      );
      this.load.image(
        "punchLBlue1",
        "assets/MiniBoxingBlue/blue/PunchLeft/__Boxing04_PunchLeft_001.png"
      );
      this.load.image(
        "punchLBlue2",
        "assets/MiniBoxingBlue/blue/PunchLeft/__Boxing04_PunchLeft_002.png"
      );
      this.load.image(
        "punchLBlue3",
        "assets/MiniBoxingBlue/blue/PunchLeft/__Boxing04_PunchLeft_003.png"
      );
      this.load.image(
        "punchLBlue4",
        "assets/MiniBoxingBlue/blue/PunchLeft/__Boxing04_PunchLeft_004.png"
      );
      this.load.image(
        "punchLBlue5",
        "assets/MiniBoxingBlue/blue/PunchLeft/__Boxing04_PunchLeft_005.png"
      );

      // ko images 
      this.load.image(
        'koBlue0',
        'assets/MiniBoxingBlue/blue/KO/__Boxing04_KO_000.png'
      )
      this.load.image(
        'koBlue1',
        'assets/MiniBoxingBlue/blue/KO/__Boxing04_KO_001.png'
      )
      this.load.image(
        'koBlue2',
        'assets/MiniBoxingBlue/blue/KO/__Boxing04_KO_002.png'
      )
      this.load.image(
        'koBlue3',
        'assets/MiniBoxingBlue/blue/KO/__Boxing04_KO_003.png'
      )
      this.load.image(
        'koBlue4',
        'assets/MiniBoxingBlue/blue/KO/__Boxing04_KO_004.png'
      )
      this.load.image(
        'koBlue5',
        'assets/MiniBoxingBlue/blue/KO/__Boxing04_KO_005.png'
      )
      this.load.image(
        'koBlue6',
        'assets/MiniBoxingBlue/blue/KO/__Boxing04_KO_006.png'
      )
      this.load.image(
        'koBlue7',
        'assets/MiniBoxingBlue/blue/KO/__Boxing04_KO_007.png'
      )
      this.load.image(
        'koBlue8',
        'assets/MiniBoxingBlue/blue/KO/__Boxing04_KO_008.png'
      )
      this.load.image(
        'koBlue9',
        'assets/MiniBoxingBlue/blue/KO/__Boxing04_KO_009.png'
      )

      this.load.image(
        'blockBlue0',
        'assets/MiniBoxingBLUE/BLUE/Blocking/__Boxing04_Blocking_000.png'
      )

      this.load.image(
        'blockBlue1',
        'assets/MiniBoxingBLUE/BLUE/Blocking/__Boxing04_Blocking_001.png'
      )

      this.load.image(
        'blockBlue2',
        'assets/MiniBoxingBLUE/BLUE/Blocking/__Boxing04_Blocking_002.png'
      )

      this.load.image(
        'blockBlue3',
        'assets/MiniBoxingBLUE/BLUE/Blocking/__Boxing04_Blocking_003.png'
      )

      this.load.image(
        'blockBlue4',
        'assets/MiniBoxingBLUE/BLUE/Blocking/__Boxing04_Blocking_004.png'
      )

      this.load.image(
        'blockBlue5',
        'assets/MiniBoxingBLUE/BLUE/Blocking/__Boxing04_Blocking_005.png'
      )

      this.load.image(
        'blockBlue6',
        'assets/MiniBoxingBLUE/BLUE/Blocking/__Boxing04_Blocking_006.png'
      )

      
      this.load.image(
        'blockBlue7',
        'assets/MiniBoxingBLUE/BLUE/Blocking/__Boxing04_Blocking_007.png'
      )

      this.load.image(
        'blockBlue8',
        'assets/MiniBoxingBLUE/BLUE/Blocking/__Boxing04_Blocking_008.png'
      )

      this.load.image(
        'blockBlue9',
        'assets/MiniBoxingBLUE/BLUE/Blocking/__Boxing04_Blocking_009.png'
      )

      this.load.image(
        'dizzyBlue0',
        'assets/MiniBoxingBLUE/BLUE/Dizzy/__Boxing04_Dizzy_000.png'
      )
      this.load.image(
        'dizzyBlue1',
        'assets/MiniBoxingBLUE/BLUE/Dizzy/__Boxing04_Dizzy_001.png'
      )
      this.load.image(
        'dizzyBlue2',
        'assets/MiniBoxingBLUE/BLUE/Dizzy/__Boxing04_Dizzy_002.png'
      )

      this.load.image(
        'dizzyBlue3',
        'assets/MiniBoxingBLUE/BLUE/Dizzy/__Boxing04_Dizzy_003.png'
      )

      this.load.image(
        'dizzyBlue4',
        'assets/MiniBoxingBLUE/BLUE/Dizzy/__Boxing04_Dizzy_004.png'
      )

      this.load.image(
        'dizzyBlue5',
        'assets/MiniBoxingBLUE/BLUE/Dizzy/__Boxing04_Dizzy_005.png'
      )

      this.load.image(
        'dizzyBlue6',
        'assets/MiniBoxingBLUE/BLUE/Dizzy/__Boxing04_Dizzy_006.png'
      )

      this.load.image(
        'dizzyBlue7',
        'assets/MiniBoxingBLUE/BLUE/Dizzy/__Boxing04_Dizzy_007.png'
      )

      this.load.image(
        'hurtBlue0',
        'assets/MiniBoxingBlue/blue/Hurt/__Boxing04_Hurt_000.png'
      )
      this.load.image(
        'hurtBlue1',
        'assets/MiniBoxingBlue/blue/Hurt/__Boxing04_Hurt_001.png'
      )
      this.load.image(
        'hurtBlue2',
        'assets/MiniBoxingBlue/blue/Hurt/__Boxing04_Hurt_002.png'
      )
      this.load.image(
        'hurtBlue3',
        'assets/MiniBoxingBlue/blue/Hurt/__Boxing04_Hurt_003.png'
      )
      this.load.image(
        'hurtBlue4',
        'assets/MiniBoxingBlue/blue/Hurt/__Boxing04_Hurt_004.png'
      )
      this.load.image(
        'hurtBlue5',
        'assets/MiniBoxingBlue/blue/Hurt/__Boxing04_Hurt_005.png'
      )
      this.load.image(
        'hurtBlue6',
        'assets/MiniBoxingBlue/blue/Hurt/__Boxing04_Hurt_006.png'
      )
      this.load.image(
        'hurtBlue7',
        'assets/MiniBoxingBlue/blue/Hurt/__Boxing04_Hurt_007.png'
      )

      
  }



  createAnimsRed() {
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
        { key: "punchL5" },
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

    this.anims.create({
      key: "ko",
      frames: [
        { key: "ko0" },
        { key: "ko1" },
        { key: "ko2" },
        { key: "ko3" },
        { key: "ko4" },
        { key: "ko5" },
        { key: "ko6" },
        { key: "ko7" },
        { key: "ko8" },
        { key: "ko9" },
      ],
      frameRate: 15,
      repeat: 0
    });

    this.anims.create({
      key: "block",
      frames: [
        {key: "block0"},
        {key: "block1"},
        {key: "block2"},
        {key: "block3"},
        {key: "block4"},
        {key: "block5"},
        {key: "block6"},
        {key: "block7"},
        {key: "block8"},
        {key: "block9"},
      ],
      frameRate: 15
    })

    this.anims.create({
      key: "dizzy",
      frames: [
        {key: "dizzy0"},
        {key: "dizzy1"},
        {key: "dizzy2"},
        {key: "dizzy3"},
        {key: "dizzy4"},
        {key: "dizzy5"},
        {key: "dizzy6"},
        {key: "dizzy7"},
      ],
      frameRate: 15
    })

    this.anims.create({
      key: "hurt",
      frames: [
        {key: "hurt0"},
        {key: "hurt1"},
        {key: "hurt2"},
        {key: "hurt3"},
        {key: "hurt4"},
        {key: "hurt5"},
        {key: "hurt6"},
        {key: "hurt7"},
      ],
      frameRate: 15
    })
  }

  createAnimsBlue(){
    this.anims.create({
      key: "idleBlue",
      frames: [
        // idle0Blue
        { key: "idle0Blue" },
        { key: "idle1Blue" },
        { key: "idle2Blue" },
        { key: "idle3Blue" },
        { key: "idle4Blue" },
        { key: "idle5Blue" },
        { key: "idle6Blue" },
        { key: "idle7Blue" },
        { key: "idle8Blue", duration: 50 },
      ],
      frameRate: 8,
      repeat: -1,
    });

    this.anims.create({
      key: "walkBlue",
      frames: [
        // walk0Blue
        { key: "walk0Blue" },
        { key: "walk1Blue" },
        { key: "walk2Blue" },
        { key: "walk3Blue" },
        { key: "walk4Blue" },
        { key: "walk5Blue" },
        { key: "walk6Blue" },
        { key: "walk7Blue" },
        { key: "walk8Blue" },
        { key: "walk9Blue" },
      ],
      frameRate: 15,
      repeat: -1,
    });

    this.anims.create({
      key: "walkbackBlue",
      frames: [
        // walkbackBlue0
        { key: "walkbackBlue0" },
        { key: "walkbackBlue1" },
        { key: "walkbackBlue2" },
        { key: "walkbackBlue3" },
        { key: "walkbackBlue4" },
        { key: "walkbackBlue5" },
        { key: "walkbackBlue6" },
        { key: "walkbackBlue7" },
        { key: "walkbackBlue8" },
      ],
      frameRate: 15,
      repeat: -1,
    });

    this.anims.create({
      key: "punchrightBlue",
      frames: [
        // punchBlueR0
        { key: "punchBlueR0" },
        { key: "punchBlueR1" },
        { key: "punchBlueR2" },
        { key: "punchBlueR3" },
        { key: "punchBlueR4" },
      ],
      frameRate: 15,
    });

    this.anims.create({
      key: "punchleftBlue",
      frames: [
        // punchLBlue0
        { key: "punchLBlue0" },
        { key: "punchLBlue1" },
        { key: "punchLBlue2" },
        { key: "punchLBlue3" },
        { key: "punchLBlue4" },
        { key: "punchLBlue5" },
      ],
      frameRate: 15,
    });

    this.anims.create({
      key: "uppercutBlue",
      frames: [
        // uppercutBlue0
        { key: "uppercutBlue0" },
        { key: "uppercutBlue1" },
        { key: "uppercutBlue2" },
        { key: "uppercutBlue3" },
        { key: "uppercutBlue4" },
        { key: "uppercutBlue5" },
      ],
      frameRate: 15,
    });

    this.anims.create({
      key: "koBlue",
      frames: [
        // koBlue0
        { key: "koBlue0" },
        { key: "koBlue1" },
        { key: "koBlue2" },
        { key: "koBlue3" },
        { key: "koBlue4" },
        { key: "koBlue5" },
        { key: "koBlue6" },
        { key: "koBlue7" },
        { key: "koBlue8" },
        { key: "koBlue9" },
      ],
      frameRate: 15,
      repeat: 0
    });

    this.anims.create({
      key: "blockBlue",
      frames: [
        {key: "blockBlue0"},
        {key: "blockBlue1"},
        {key: "blockBlue2"},
        {key: "blockBlue3"},
        {key: "blockBlue4"},
        {key: "blockBlue5"},
        {key: "blockBlue6"},
        {key: "blockBlue7"},
        {key: "blockBlue8"},
        {key: "blockBlue9"},
      ],
      frameRate: 15
    })

    this.anims.create({
      key: "dizzyBlue",
      frames: [
        {key: "dizzyBlue0"},
        {key: "dizzyBlue1"},
        {key: "dizzyBlue2"},
        {key: "dizzyBlue3"},
        {key: "dizzyBlue4"},
        {key: "dizzyBlue5"},
        {key: "dizzyBlue6"},
        {key: "dizzyBlue7"},
      ],
      frameRate: 15
    })

    this.anims.create({
      key: "hurtBlue",
      frames: [
      {key: "hurtBlue0"},
      {key: "hurtBlue1"},
      {key: "hurtBlue2"},
      {key: "hurtBlue3"},
      {key: "hurtBlue4"},
      {key: "hurtBlue5"},
      {key: "hurtBlue6"},
      {key: "hurtBlue7"},
    ],
    frameRate: 15
    })


  }

  create() {

    this.createAnimsRed();
    this.createAnimsBlue();
    
    // ssj
    this.anims.create({
      key: "ssj",
      frames: [
        {key: "ssj0", duration: 10},
        {key: "ssj1", duration: 10},
        {key: "ssj2", duration: 10}
      ],
      frameRate: 8,
      repeat: -1
      
    })

    this.scene.start("FightSceneOnline", this.socket2);
  }

}
