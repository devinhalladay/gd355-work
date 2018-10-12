var r = 255;
var b = 80;
var g = 100;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
  c = map(mouseX, 0, width, 0, 255);
  background(c);

  negC = map(mouseX, 0, width, 255, 0);

  sw = map(mouseX, 0, width, 0, 10);

  stroke(negC);
  strokeWeight(sw);
  line(mouseX, mouseY, pmouseX, pmouseY);

  stroke(0);
  strokeWeight(1);
  fill(255, 255, 255, negC);

  line(0, 0, width, height);

  fill(r, g, b);
  rect(random(0, windowWidth), random(0, windowHeight), 200, 200);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  r = width;
  g = width/2;
  b = width/2;
};
