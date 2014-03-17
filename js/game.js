myGame.Game = function(game){
    this.game = game;
};

myGame.Game.prototype = {
    // Function called first to load all the assets
    preload: function() { 

        // background
        this.game.load.image('starfield','assets/starfield.jpg');
        // robot sprites
        game.load.atlasJSONHash('bot', 'assets/sprites/running_bot.png', 'assets/sprites/running_bot.json');
        // Load the robot sprite
        this.game.load.image('robot', 'assets/robot.jpg');
        // Load the pipe sprite
        this.game.load.image('pipe', 'assets/space-baddie.png');
    },

    // Fuction called after 'preload' to setup the game 
    create: function() { 
        // Add the background sprite
        this.game.add.sprite(0, 0, 'starfield');
        // Display the robot on the screen
        this.robot = this.game.add.sprite(50, 5, 'bot');
        //  Here we add a new animation called 'run'
        //  We haven't specified any frames because it's using every frame in the texture atlas
        this.robot.animations.add('run');
        this.robot.animations.play('run', 15, true);
        
        // Add gravity to the robot to make it fall
        this.robot.body.gravity.y = 850; 

        // Call the 'jump' function when the spacekey is hit
        var space_key = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        space_key.onDown.add(this.jump, this); 
        // Create a group of 20 pipes
        this.pipes = game.add.group();
        this.pipes.createMultiple(20, 'pipe');
        // Timer that calls 'add_row_of_pipes' ever 1.5 seconds
        this.timer = this.game.time.events.loop(1500, this.add_row_of_pipes, this);
        // Add a score label on the top left of the screen
        this.score = 0;
        game.score = 0;
        this.label_score = this.game.add.text(20, 20, "0", { font: "30px Arial", fill: "#ffffff" });
        this.emitter = game.add.emitter(0, 0, 200);
        this.emitter.makeParticles('pixel');
        this.emitter.gravity = 0;
    },

    // This function is called 60 times per second
    update: function() {
        // If the robot is out of the world (too high or too low), call the 'restart_game' function
        if (this.robot.inWorld == false)
            this.restart_game(); 

        // If the robot overlap any pipes, call 'restart_game'
        this.game.physics.overlap(this.robot, this.pipes, this.playerHit, null, this);
    },

    // Make the robot jump 
    jump: function() {
        // Add a vertical velocity to the robot
        this.robot.body.velocity.y = -350;
    },

    // Restart the game
    restart_game: function() {
        // Remove the timer
        this.game.time.events.remove(this.timer);
        game.score = this.score;
        // Start the 'main' state, which restarts the game
        this.game.state.start('end');
    },

    // Add a pipe on the screen
    add_one_pipe: function(x, y) {
        // Get the first dead pipe of our group
        var pipe = this.pipes.getFirstDead();
        // Set the new position of the pipe
        pipe.reset(x, y);
        // Add velocity to the pipe to make it move left
        pipe.body.velocity.x = -200; 
        // Kill the pipe when it's no longer visible 
        pipe.outOfBoundsKill = true;
    },

    // Add a row of 6 pipes with a hole somewhere in the middle
    add_row_of_pipes: function() {
        var hole = Math.floor(Math.random()*5)+1;
        for (var i = 0; i < 8; i++){
            if (i != hole && i != hole +1)
                this.add_one_pipe(400, i*60+20);
        }
        this.score += 1;
        this.label_score.content = this.score;
    },

    /**
     * When a player is hit.
     */
    playerHit: function(){
        this.emitter.x = this.robot.body.x+this.robot.width/2;
        this.emitter.y = this.robot.body.y+this.robot.height/2;
        this.emitter.start(true, 300, null, 5);
        this.restart_game();
    }

}

