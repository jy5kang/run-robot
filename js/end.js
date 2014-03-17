myGame.End = function(game){
  this.game = game;
};

myGame.End.prototype = {
  create: function(){
    this.spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    gameOver_title = game.add.text(this.game.world.centerX, 50, 'GAME OVER', { font: '30px Arial', fill: '#fff' })
    gameOver_title.anchor.setTo(0.5,0.5);
    game_title = game.add.text(this.game.world.centerX, this.game.world.centerY-70, 'You Scored', { font: '30px Arial', fill: '#fff' });
    game_title.anchor.setTo(0.5, 0.5);
    game_score = game.add.text(this.game.world.centerX, this.game.world.centerY-10, game.score+'', { font: '40px Arial', fill: '#fff' });
    game_score.anchor.setTo(0.5, 0.5);
    game_instruction = game.add.text(this.game.world.centerX, this.game.height-50, 'Press Space Bar to Re-start', { font: '30px Arial', fill: '#fff' });
    game_instruction.anchor.setTo(0.5, 0.5);
  },

  update: function(){
    if(this.spaceKey.isDown){
      this.restart();
    }
  },

  restart : function(){
    console.log('starting game...');
    // change the state to "game" state.
    this.game.state.start('game');
  }
}