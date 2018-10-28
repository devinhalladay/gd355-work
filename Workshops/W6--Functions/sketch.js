var x = 0;
var y = 0;

function setup() {
	createCanvas(400, 400);
}

function draw() {
	background(250);

	strokeWeight(1);
	stroke(0);
	noFill();

	for (i = 0; i < 10; i++) {
		drawSquiggle(x+50, y+50);
		x++;
		y++;
	}
}

function drawSquiggle(x, y) {
	for (i = 0; i < 10; i++) {
		beginShape();
		curveVertex(x + 50, y + 75);
		curveVertex(x + 50, y + 75);
		curveVertex(x + 75, y + 25);
		curveVertex(x + 100, y + 75);
		curveVertex(x + 125, y + 25);
		curveVertex(x + 150, y + 75);
		curveVertex(x + 175, y + 50);
		curveVertex(x + 175, y + 50);
		endShape();
	}
}
