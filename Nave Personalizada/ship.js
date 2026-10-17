function Ship() {
  this.x = 0;
  this.y = 0;
  this.width = 50;
  this.height = 50;
  this.rotation = 0;
  this.showFlame = false;

  // Load the spaceship image
  this.image = new Image();
  this.image.src = "galaga.png";
}

Ship.prototype.draw = function(context) {
  context.save();

  context.translate(this.x, this.y);
  context.rotate(this.rotation);

  // Draw the ship centered on its position
  if (this.image.complete && this.image.naturalWidth > 0) {
    context.drawImage(
      this.image,
      -this.width / 2,
      -this.height / 2,
      this.width,
      this.height
    );
  }

  if (this.showFlame) {
  context.beginPath();
  context.moveTo(-this.width / 2, -5);
  context.lineTo(-this.width / 2 - 15, 0);
  context.lineTo(-this.width / 2, 5);
  context.closePath();

  context.fillStyle = "#ff6600";
  context.fill();
}

  context.restore();
};
