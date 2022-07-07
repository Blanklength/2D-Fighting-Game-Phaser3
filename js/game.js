
var config = {
  parent: drawpanel,
  pixelArt: true,
  type: Phaser.AUTO,
  backgroundColor: "#0ff4fc",
  physics: {
    default: "arcade",
    arcade: {
      debug: false,
      gravity: { y: 0 },
    },
  },

  scale: {
    mode: Phaser.Scale.RESIZE,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },

  scene: [TitleScreen, PreloadFightScene, FightScene, Stage1, CreateLobbyScene, JoinLobbyScene],
};
var game = new Phaser.Game(config);

