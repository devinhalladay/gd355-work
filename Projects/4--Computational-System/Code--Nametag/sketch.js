function preload() {

}

function setup() {
  createCanvas(612, 792, SVG);
  background(0);
  noLoop();
}

function draw() {
  background(0);
}

function keyPressed() {
  if (keyCode === 32) {
    save();
  }
}
