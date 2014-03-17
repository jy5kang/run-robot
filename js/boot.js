/**
 * boot.js
 * It prepares what you will see on loading screen.
 * Once loading is done, it changes the state to "preloader" state.
 **/

var myGame = {};

myGame.Boot = function(game){
  this.game = game;
};

myGame.Boot.prototype = {
  preload: function(){
    // Change the background color of the game
    this.game.stage.backgroundColor = '#233268';
    this.game.load.image('loading', 'assets/loading.png');
    this.game.load.image('loading2', 'assets/loading2.png');
  },

  create: function(){
    console.log("boot loaded.");
    this.game.state.start('preloader');
  }
}