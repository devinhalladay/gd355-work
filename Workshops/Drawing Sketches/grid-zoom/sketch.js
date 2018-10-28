// grid zoom

var sval;

function setup() {
  createCanvas(600, 600);
  strokeWeight(0.588235294);
  sval = 1;
}

function draw() {
  background(255);
  var numLines = 40;

  sval += 0.04;

  sval = constrain(sval, 1.0, 20.0);

  translate(width/2, height/2);
  strokeWeight(1/sval);
  scale(sval);
  translate(-width/2, -height/2);

  for (var i = 1; i <= numLines; i++) {
    line(0, i*15, 600, i*15);
    line(i*15, 0, i*15, 600);
  }
}

function keyPressed() {
  sval -= 0.04;
}
