class TitleScreen extends Phaser.Scene{
    constructor(){
        super('TitleScreen')
    }

    preload(){
        this.load.image('start', 'assets/better_start_btn.png');
        this.load.image('start_sel', 'assets/start_selected.png');
        this.load.image('settings', 'assets/settings_btn.png');
        this.load.image('title', 'assets/title_text.png');
        
    }

    create(){
        let { width, height } = this.sys.game.canvas;
        this.add.image(width/2, height/2, 'start_sel');
        this.add.image(width/2+20, height/2+60, 'settings')
        this.add.image(width/2-20, height/2-20, 'title')
    }

    update(){

    }


    
}

