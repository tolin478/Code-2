
function setup(){
  clicked = false;
  createCanvas(500,500);
  noStroke();

}

function draw(){
  background(0);

  fill(255,0,0);
  rect(100,100,100,100);

  if(clicked){
    background(255);
    fill(255,0,0);
    rect(100,100,100,100);
    }
}

function mouseClicked(){
  let mousePosition = createVector(mouseX,mouseY);

  if(mousePosition.x>100&&mousePosition.x<200&&mousePosition.y>100&&mousePosition.y<200){
    clicked = true;
  }
}
