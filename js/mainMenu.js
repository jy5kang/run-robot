myGame.MainMenu = function(game){
  // our main menu
  this.game = game;
};

myGame.MainMenu.prototype = {
  create: function(){
    this.spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    game_title = game.add.text(this.game.world.centerX, 80, 'Fly Bird', { font: '30px Arial', fill: '#fff' });
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