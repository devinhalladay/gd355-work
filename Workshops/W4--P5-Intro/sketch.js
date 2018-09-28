var xoff = 0.0;
var xincrement = 0.01;
var running = true;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(255);
  ellipseMode(RADIUS);
  frameRate(1);
}

function draw() {
  // var n = noise(xoff)*200;

  // filter(BLUR, 2);
  // ellipse(mouseX, mouseY, n*3);

  var radius = width*2;
  var a = random(0, 255);
  // var rr = random(0, 255);
  // var g = random(0, 255);
  // var b = random(0, 255);
  fill(255,255,255,a);
  for (var r = radius; r > 0; --r) {
    ellipse(mouseX, mouseY, r, r);
  }

  a++ % 255;
  // xoff += xincrement;
}
