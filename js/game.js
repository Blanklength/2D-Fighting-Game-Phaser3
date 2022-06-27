
var config = {
    parent: drawpanel,
    pixelArt: true,
    type: Phaser.AUTO,
    backgroundColor: '#87CEFA',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },

    scale: {
        mode: Phaser.Scale.RESIZE,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },

    scene: [
        TitleScreen,
        SettingsScene,
        FightScene
    ]
    
};  


var game = new Phaser.Game(config);
