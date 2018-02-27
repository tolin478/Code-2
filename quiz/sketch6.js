function setup(){
createCanvas(500,500);
}

function draw(){
  background(0);

for(var x = 10; x < width; x+=50) {
  for(var y = 10; y<height; y+=50){
  fill(x,y,0);
  rect(x,y,20,20);
  }
 }
}

