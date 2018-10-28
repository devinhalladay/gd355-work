function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  noStroke();
  if (mouseIsPressed) {
    fill(255);
  } else {
    fill(30, 126, 255);
  }
  ellipse(mouseX, mouseY, 100, 100);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
