/**
 * preloader.js
 * This file deals with loading screen.
 * Once it's all ready, it changes the game state to "mainmenu" state.
 **/

myGame.Preloader = function(game){
  this.game = game;
}

myGame.Preloader.prototype = {

  preload: function(){
    var width = this.game.world.width;
    var height = this.game.world.height;

    // Loading progress
    loading_label = this.game.add.text(this.game.world.centerX, this.game.world.centerY-50, 'Now Loading', { font: "21pt Courier", fill: "#35954e"});
    // The anchor sets the origin point of the texture; 0.5 and 0.5 means that the textures origin is centered.
    loading_label.anchor.setTo(0.5, 0.5);
    loading_bar2 = game.add.sprite(width/2, height/2+15, 'loading2');
    loading_bar2.x -= loading_bar2.width /2;
    loading_bar = game.add.sprite(width/2, height/2+19 , 'loading');
    loading_bar.x -= loading_bar.width / 2;

    game.load.setPreloadSprite(loading_bar);
  },

  create: function(){
    console.log('Preloader finished. Let\'s go to the main menu automatically');

    // change current state to the "mainmenu" state.
    this.game.state.start('mainmenu');
  }
}