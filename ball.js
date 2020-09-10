
const BALL_ORIGIN = new Vector2(25,25);

function ball(position){

    this.position = position;
    this.velocity = new Vector2();
}

ball.prototype.update = function(delta){
       
      this.position.addTo(this.velocity.mult(delta));

      this.velocity = this.velocity.mult(0.975);
}

ball.prototype.draw = function(){
    Canvas.drawImage(pictures.whiteBall, this.position, BALL_ORIGIN);
}

ball.prototype.shoot = function(power, rotation){

    this.velocity = new Vector2(power * Math.cos(rotation), power * Math.sin(rotation));

}