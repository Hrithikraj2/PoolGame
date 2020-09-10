const stick_origin = new Vector2(980,12);
const stick_shot_origin = new Vector2(980,12);
function stick(position, onshoot){
    this.position = position;
    this.rotation = 0;
    this.origin = stick_origin.copy();
    this.power = 0;
    this.onshoot = onshoot;
}

stick.prototype.update = function(){
     
    if(Mouse.left.down){
        this.increasePower();
    }
    else if(this.power > 0){
        this.shoot();
    }
    this.updateRotation(); 
}

stick.prototype.draw = function(){
    Canvas.drawImage(pictures.stick, this.position, this.origin, this.rotation);
}

stick.prototype.updateRotation = function(){

    let opp = Mouse.position.y - this.position.y;
    let adj = Mouse.position.x - this.position.x;

    this.rotation = Math.atan2(opp, adj);
}

stick.prototype.increasePower = function(){

    this.power += 100;
    this.origin.x += 5;
}

stick.prototype.shoot = function(){

    this.onshoot(this.power, this.rotation);
    this.power = 0; 
    this.origin = stick_shot_origin.copy();
}