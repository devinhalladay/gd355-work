function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
	strokeWeight(1);
	stroke(0);
	ellipse(width/2, height/2, 50, 50)
	noFill();

	for (i = 0; i < 10; i++) {
		drawConcentricCircle(i*50, i+50, i, color(i*29));
	}

	for (i = 0; i < 10; i++) {
		drawConcentricCircle(i*50, i+200, 10-i, color(i*29));
	}

	for (i = 0; i < 10; i++) {
		drawConcentricCircle(i*50, i+350, i, color(i*29));
	}
}

function drawConcentricCircle(x, y, sw, sc) {
	strokeWeight(sw);
	stroke(sc);
	ellipse(x, y, 50, 50);
	ellipse(x, y, 100, 100);
	ellipse(x, y, 150, 150);
}
