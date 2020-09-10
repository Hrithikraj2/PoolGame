function game(){

}

game.prototype.init = function(){
    this.gameWorld = new gameUtil();
}

game.prototype.start = function(){

    poolGame.init();

    poolGame.mainloop();

}

game.prototype.mainloop = function(){

    Canvas.clear();
    poolGame.gameWorld.update();
    poolGame.gameWorld.draw();
    Mouse.reset();

    requestAnimationFrame(poolGame.mainloop);
    
}

let poolGame = new game()