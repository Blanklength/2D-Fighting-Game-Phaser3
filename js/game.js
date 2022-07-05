var config = {
  parent: drawpanel,
  pixelArt: true,
  type: Phaser.AUTO,
  backgroundColor: "#87CEFA",
  physics: {
    default: "arcade",
    arcade: {
      debug: true,
      gravity: { y: 0 },
    },
  },

  scale: {
    mode: Phaser.Scale.RESIZE,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },

  scene: [TitleScreen, PreloadFightScene, FightScene, Stage1],
};

var game = new Phaser.Game(config);
