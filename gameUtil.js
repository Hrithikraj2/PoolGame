const DELTA = 1/100;

function gameUtil(){

    this.whiteBall = new ball(new Vector2(415,415));
    this.sTick = new stick(new Vector2(415,415), this.whiteBall.shoot.bind(this.whiteBall));

}

gameUtil.prototype.update = function(){

    this.sTick.update();
    this.whiteBall.update(DELTA);

}

gameUtil.prototype.draw = function(){

     Canvas.drawImage(pictures.background,{x:0, y:0});

     this.sTick.draw();
     this.whiteBall.draw();
}