var width = 400;
var height = 490;

var game = new Phaser.Game(width, height, Phaser.AUTO, 'game_div');

// Defining states
game.state.add('boot', myGame.Boot, true);
game.state.add('preloader', myGame.Preloader);
game.state.add('mainmenu', myGame.MainMenu);
game.state.add('game', myGame.Game);
game.state.add('end', myGame.End);