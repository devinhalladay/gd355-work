var rectWidth;
var keyValue;

function setup() {
  createCanvas(720, 400);
  noStroke();
  background(230);
  rectWidth = width/4;
}

function draw() {
  background(230);
  textSize(60)
  text(keyValue, random(width), random(height))
}

function keyPressed() {
  keyValue = key
}
