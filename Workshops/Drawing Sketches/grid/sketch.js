var x = 0;
var y = 0;

function setup() {
  background(255);
  createCanvas(600, 400);
}

function draw() {
  for (x = 0; x <= width; x+=20) {
    makeRect();
  }

  if(x >= width) {
    if(y <= height-20) {
      y+=20;
    }
  }
}

function makeRect() {
  rect(x,y,20,20);
}
