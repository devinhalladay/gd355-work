var record;

var resolution = 360; // how many points in the circle
var rad = 250;
var x = 1;
var y = 1;

var t = 0; // time passed
var tChange = .0008; // how quick time flies

var nVal; // noise value
var nInt = 1; // noise intensity
var nAmp = 1; // noise amplitude

function setup() {
  createCanvas(windowWidth, windowHeight);
  smooth();
}

function draw() {
  background(255);
  translate(width/2, height/2);

  fill(0);
  strokeWeight(0);

  nInt = map(mouseX, 0, 0, width, 0.1, 10); // map mouseX to noise intensity
  nAmp = map(mouseY, 0, 0, height, 0.3, 1.0); // map mouseY to noise amplitude
  beginShape();
  for (var a=0; a<=TWO_PI; a+=TWO_PI/resolution) {

    nVal = map(noise( cos(a)*nInt+1, sin(a)*nInt+1, t ), 0.0, 1.0, nAmp, 1.0); // map noise value to match the amplitude

    x = cos(a)*rad *nVal;
    y = sin(a)*rad *nVal;

    vertex(x, y);
    }
  endShape(CLOSE);

  t += tChange;
}
