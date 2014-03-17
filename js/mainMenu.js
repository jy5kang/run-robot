myGame.MainMenu = function(game){
  // our main menu
  this.game = game;
};

myGame.MainMenu.prototype = {
  preload: function(){
    game.load.atlasJSONHash('robot', 'assets/sprites/running_bot.png', 'assets/sprites/running_bot.json');
  },
  create: function(){
    this.spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    game_title = game.add.text(this.game.world.centerX, 80, 'Run Robot', { font: '30px Arial', fill: '#fff' });
    this.robot = game.add.sprite(this.game.world.centerX-20, 150, 'robot');
    this.robot.animations.add('run');
    this.robot.animations.play('run', 15, true);
    game_title.anchor.setTo(0.5, 0.5);
    game_instruction = game.add.text(this.game.world.centerX, this.game.world.centerY, 'Press Space Bar to Start', { font: '30px Arial', fill: '#fff' });
    game_instruction.anchor.setTo(0.5, 0.5);
  },

  update: function(){
    if(this.spaceKey.isDown){
      this.startGame();
    }
  },

  startGame : function(){
    console.log('starting game...');
    // change the state to "game" state.
    this.game.state.start('game');
  }

}