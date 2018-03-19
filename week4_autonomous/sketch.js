let vehicles = [];

function setup() {

  createCanvas(800, 800);

  let numVehicles = 10;
  for (let i = 0; i < numVehicles; i++) {
    v = new Vehicle(createVector(random(0, width), random(0,height)));

    v.color = color(random(0, 255), random(0, 255), random(0, 255));
    v.maxSpeed = random(1, 5);
    vehicles.push(v);

  }
}

function draw() {

  background(225);

  fill(255);
  noStroke();
  ellipse(mouseX, mouseY, 48, 48);

  for (let v of vehicles) {
    v.seek(createVector(mouseX, mouseY));
    v.update();
    v.display();

  }
}

class Vehicle {

  constructor(position) {

    this.position = position;
    this.velocity = createVector(0,0);
    this.acceleration = createVector(0,0);
    this.r = 6;
    this.color = color(255, 0, 0);

    this.maxSpeed = 4;

  }

  seek(target) {

      let desired = target.sub(this.position);
      desired.setMag(this.maxSpeed);

      let steer = desired.sub(this.velocity);
      this.applyForce(steer);
  }

  applyForce(force) {

    this.acceleration.add(force);

  }

  update() {

    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);

    this.acceleration.mult(0);

    if(this.position.y<50){
      this.position.y -= 1;
    }else if(this.position.x>750){
      this.position.y += 1;
    }

    if(this.position.x>750){
      this.position.x += 1;
    }else if(this.position.x<50){
      this.position.x += -1;
    }

  }

  display() {

    let theta = this.velocity.heading() + HALF_PI;

    fill(this.color);
    noStroke();

    translate(this.position.x, this.position.y);
    rotate(theta);

    ellipse(10,10,this.position.x,this.position.y);

    resetMatrix();
  }
}
