function setup(){
createCanvas(500,500);
}

function draw(){
  background(0);

for(var x = 10; x < width; x+=50) {
  fill(x+50,0,0);
  rect(x,height/2,20,20);
 }
}
