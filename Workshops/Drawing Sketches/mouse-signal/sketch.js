// View: https://editor.p5js.org/devinhalladay/sketches/Hk85ximsQ

var xvals = [];
var yvals = [];
var bvals = [];
var c = 0;

function setup()
{
  createCanvas(720, 800);
  strokeWeight(2);
	background(0);
	colorMode(HSB);
}

function draw()
{
  background(0);

    if (mouseIsPressed === true) {
    background(0)
  }

	var mappedMouseX = map(mouseX, 0, width, 0, 255);
	var mappedMouseY = map(mouseY, 0, height, 0, 255);

  for(var i = 1; i < width; i++) {
    xvals[i-1] = xvals[i];
    yvals[i-1] = yvals[i];
    bvals[i-1] = bvals[i];
  }
  // Add the new values to the end of the array
  xvals[width-1] = mouseX;
  yvals[width-1] = mouseY;

  if(mouseIsPressed) {
    bvals[width-1] = 0;
  } else {
    bvals[width-1] = 255;
  }

  for(var i=1; i<width; i++) {
    stroke(mappedMouseX, 255, 255);
    point(i, xvals[i]);
    stroke(mappedMouseY, 255, 255);
    point(i, height/3+yvals[i]/3);
    stroke(mappedMouseY, 255, 255);
    line(i, 2*height/3+bvals[i]/3, i, (2*height/3+bvals[i-1]));
  }

	if (c >= 360) {
    c = 0;
  } else {
    c += 1;
  }

  noFill();
  stroke(c, 255, 255);
  line(mouseX, mouseY, pmouseX, pmouseY);
}
