class FireworkParticle {
  color fireworkColor;
  PVector position;
  PVector velocity;
  PVector acceleration;
  float alpha;
  float rectX;
  float rectY;
  
  FireworkParticle(PVector position, color fireworkColor) {
    reset(position, fireworkColor);
  }
  
  void reset(PVector position, color fireworkColor) {
    this.position = new PVector(position.x, position.y);
    this.fireworkColor = fireworkColor;
    
    this.velocity = new PVector(random(-0.5, 0.5), random(-1, 1));
    this.acceleration = new PVector(0, random(0, 0.05));
    
    this.rectX = 9;
    this.rectY = 3;
    this.alpha = 100;
  }
  
  void update() {
    velocity.add(acceleration);
    position.add(velocity);
    
    alpha++;
  }
  
  void draw() {
    noStroke();
    fill(fireworkColor, alpha);
    rect(position.x, position.y, rectY, rectX);
  }
}