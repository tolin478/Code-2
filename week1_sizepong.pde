int x, y, w, h, speedX, speedY;
float paddleXL, paddleYL, paddleW, paddleH, paddleMove;
float paddleXR, paddleYR;
float angle = radians(90);
boolean upL, downL;
boolean upR, downR;

int scoreL = 0; 
int scoreR = 0;
int winScore = 10;
 
void setup() {

  size(600, 600);

  x = width/2; 
  y = height/2;

  speedX = 5;
  speedY = 5;

  textSize(30);
  textAlign(CENTER, CENTER); 
  rectMode(CENTER);

  paddleXL = 40;
  paddleYL = height/2;
  paddleXR = width-40;
  paddleYR = height/2;
  paddleW = 20;
  paddleMove = 5;
}
 
 
void draw() {
  background(0);
  drawCircle();
  moveCircle();
  bounceOff();
  drawPaddles();
  movePaddle();
  restrictPaddle();
  contactPaddle();
  scores();
  gameOver();
}
  
void drawPaddles() {
  float currentAngle = angle + sin(frameCount * .025);
  paddleH = sin(currentAngle)*150;
  
  fill(255);
  rect(paddleXL, paddleYL, paddleW, paddleH);
  fill(255);
  rect(paddleXR, paddleYR, paddleW, paddleH);
}
  
void movePaddle() {
  if (upL) {
    paddleYL = paddleYL - paddleMove;
  }
  if (downL) {
    paddleYL = paddleYL + paddleMove;
  }
  if (upR) {
    paddleYR = paddleYR - paddleMove;
  }
  if (downR) {
    paddleYR = paddleYR + paddleMove;
  }
}
  
void restrictPaddle() {
  if (paddleYL - paddleH/2 < 0) {
    paddleYL = paddleYL + paddleMove;
  }
  if (paddleYL + paddleH/2 > height) {
    paddleYL = paddleYL - paddleMove;
  }
  if (paddleYR - paddleH/2 < 0) {
    paddleYR = paddleYR + paddleMove;
  }
  if (paddleYR + paddleH/2 > height) {
    paddleYR = paddleYR - paddleMove;
  }
}
  
void contactPaddle() {
  if (x - w/2 < paddleXL + paddleW/2 && y - h/2 < paddleYL + paddleH/2 && y + h/2 > paddleYL - paddleH/2 ) {
    if (speedX < 0) {
      speedX *= -1;
    }
  }
  else if (x + w/2 > paddleXR - paddleW/2 && y - h/2 < paddleYR + paddleH/2 && y + h/2 > paddleYR - paddleH/2 ) {
    if (speedX > 0) {
      speedX *= -1;
    }
  }
}
 
void drawCircle() {
  float currentAngle = angle + sin(frameCount * .025);
  float w = sin(currentAngle) * 50;
  float h = sin(currentAngle) * 50;
  fill(255);
  ellipse(x, y, w, h);
}

void moveCircle() {  
  x = x + speedX;
  y = y + speedY;
}

  
void bounceOff() {
 if ( x > width - w/2) {
    setup();
    speedX = -speedX;
    scoreL = scoreL + 1;
  } else if ( x < 0 + w/2) {
    setup();
    scoreR = scoreR + 1;
  }
  if ( y > height - h/2) {
    speedY = -speedY;
  } else if ( y < 0 + h/2) {
    speedY = -speedY;
  }
}
  
void scores() {
  fill(255);
  text(scoreL, 100, 50);
  text(scoreR, width-100, 50);
}
 
 
void gameOver() {
  if(scoreL == winScore) {
    gameOverPage("Left wins!", 255);
  }
  if(scoreR == winScore) {
    gameOverPage("Right wins!", 255);
  }
}
  
void gameOverPage(String text, color c) {
  speedX = 0;
  speedY = 0;
  fill(255);
  text("Click to play again", width/2, height/3 + 40);
  fill(c);
  text(text, width/2, height/3);
  
  if(mousePressed) {
    scoreR = 0;
    scoreL = 0;
    
    speedX = 3;
    speedY = 3;
  }
}
  
void keyPressed() {
if (key == 'w') {
    upL = true;
  }
  if (key == 's') {
    downL = true;
  }
  if (keyCode == UP) {
    upR = true;
  }
  if (keyCode == DOWN) {
    downR = true;
  }
}
  
void keyReleased() {
  if (key == 'w') {
    upL = false;
  }
  if (key == 's') {
    downL = false;
  }
  if (keyCode == UP) {
    upR = false;
  }
  if (keyCode == DOWN) {
    downR = false;
  }
}