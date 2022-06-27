class TitleScreen extends Phaser.Scene{
    constructor(){
        super('TitleScreen')
    }

    preload(){
        this.load.image('start', 'assets/better_start_btn.png');
        this.load.image('start_sel', 'assets/start_selected.png');
        this.load.image('settings', 'assets/better_settings_btn .png');
        this.load.image('title', 'assets/title_text.png');
        
    }

    cursor_fun(event){
        console.log('You clicked');

    }

    create(){
        let { width, height } = this.sys.game.canvas;
        this.add.image(width/2, height/2, 'start');
        this.add.image(width/2, height/2+80, 'settings')
        this.add.image(width/2-20, height/2-20, 'title')
        this.input.keyboard.on('keyup_UP', this.cursor_fun, this)
        
    }

    update(){
        let keyobj = this.input.keyboard.addKey('W');
        if (keyobj.isDown){
            console.log('Key is Pressed')
        }
       

    }


    
}

