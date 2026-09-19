function Planet () {
  this.x = 0;
  this.y = 0;
  this.color = "#ffff00";
  this.scaleX = 1;
  this.scaleY = 1;
  this.rotation = 0; 
  this.planet = new Image();
  this.planet.src = "moon.png";
  this.radius = this.planet.width/2;
}

Planet.prototype.draw = function (context) {
  context.save();
  context.translate(this.x, this.y);
  context.rotate(this.rotation);
  context.scale(this.scaleX, this.scaleY);
 
  context.drawImage(this.planet, -this.planet.width/2, -this.planet.height/2);
 
  context.restore();
};
