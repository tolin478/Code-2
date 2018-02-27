function setup(){
  clicked = false;
  createCanvas(500,500);
  noStroke();
}

function draw(){
  background(0);

  fill(255,0,0);
  rect(100,100,100,100);

  fill(255,245,0);
  rect(200,200,100,100);

  fill(0,0,255);
  rect(300,300,100,100);

  if(clicked){
    fill(0,255,0);
    rect(100,100,100,100);

    fill(0,255,255);
    rect(200,200,100,100);

    fill(255,0,255);
    rect(300,300,100,100);
  }

}

function mouseClicked(){
  clicked = true;
}
