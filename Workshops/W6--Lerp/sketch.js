
var x = 0;
var y = 0;
var c = 0;

function setup() {
  createCanvas(720, 400);
	background(0);
  noStroke();
	noFill();
  colorMode(HSB);
}

function draw() {
  // background(51);

  // lerp() calculates a number between two numbers at a specific increment.
  // The amt parameter is the amount to interpolate between the two values
  // where 0.0 equal to the first point, 0.1 is very near the first point, 0.5
  // is half-way in between, etc.

  // Here we are moving 5% of the way to the mouse location each frame
  x = lerp(x, mouseX, 0.05);
  y = lerp(y, mouseY, 0.05);

	if (c >= 360) {
    c = 0;
  } else {
    c += 1;
  }

  stroke(c, 255, 255);
	strokeWeight(1);
	line(mouseX, mouseY, pmouseX, pmouseY);
  line(mouseX, mouseY, x, y);
}
